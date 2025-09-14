import { type ActionFunctionArgs } from 'react-router';
import { connectToDatabase } from '../lib/mongodb';
import { verifyPassword, generateToken, removePasswordFromUser } from '../lib/auth';

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ message: 'Method not allowed' }), { 
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return new Response(JSON.stringify({ message: 'Email and password are required' }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const { db } = await connectToDatabase();
    const users = db.collection('users');

    // Find user by email
    const user = await users.findOne({ email: email.toLowerCase() });
    
    if (!user) {
      return new Response(JSON.stringify({ message: 'Invalid email or password' }), { 
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Verify password
    const isPasswordValid = await verifyPassword(password, user.password);
    
    if (!isPasswordValid) {
      return new Response(JSON.stringify({ message: 'Invalid email or password' }), { 
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Generate token
    const userWithoutPassword = removePasswordFromUser(user as any);
    const token = generateToken(userWithoutPassword);

    return new Response(JSON.stringify({
      message: 'Login successful',
      token,
      user: userWithoutPassword
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Login error:', error);
    return new Response(JSON.stringify({ message: 'Internal server error' }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
