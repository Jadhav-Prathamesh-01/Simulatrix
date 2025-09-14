import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export interface User {
  _id?: string;
  email: string;
  password: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserWithoutPassword {
  _id?: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

const JWT_SECRET = process.env.JWT_SECRET || 'simulatrix-secret-key-2024';

export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 12;
  return await bcrypt.hash(password, saltRounds);
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return await bcrypt.compare(password, hashedPassword);
}

export function generateToken(user: UserWithoutPassword): string {
  return jwt.sign(
    { 
      userId: user._id, 
      email: user.email,
      name: user.name 
    },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
}

export function verifyToken(token: string): any {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
}

export function removePasswordFromUser(user: User): UserWithoutPassword {
  const { password, ...userWithoutPassword } = user;
  return userWithoutPassword;
}
