import { type ActionFunctionArgs } from 'react-router';
import { connectToDatabase } from '../lib/mongodb';
import { hashPassword, generateToken, removePasswordFromUser } from '../lib/auth';

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ message: 'Method not allowed' }), { 
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return new Response(JSON.stringify({ message: 'Name, email, and password are required' }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (password.length < 6) {
      return new Response(JSON.stringify({ message: 'Password must be at least 6 characters long' }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const { db } = await connectToDatabase();
    const users = db.collection('users');

    // Check if user already exists
    const existingUser = await users.findOne({ email: email.toLowerCase() });
    
    if (existingUser) {
      return new Response(JSON.stringify({ message: 'User with this email already exists' }), { 
        status: 409,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create user
    const newUser = {
      name: name.trim(),
      email: email.toLowerCase().trim(),
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const result = await users.insertOne(newUser);
    
    if (!result.insertedId) {
      return new Response(JSON.stringify({ message: 'Failed to create user' }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Generate token
    const userWithoutPassword = removePasswordFromUser({
      ...newUser,
      _id: result.insertedId.toString()
    });
    const token = generateToken(userWithoutPassword);

    return new Response(JSON.stringify({
      message: 'Registration successful',
      token,
      user: userWithoutPassword
    }), { 
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Registration error:', error);
    return new Response(JSON.stringify({ message: 'Internal server error' }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
