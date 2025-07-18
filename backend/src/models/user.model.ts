import pool from '../config/db';
import bcrypt from 'bcryptjs';
import { RowDataPacket } from 'mysql2';

export interface User extends RowDataPacket {
  id: number;
  username: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}

export const findUserByUsername = async (username: string): Promise<User | null> => {
  const [rows] = await pool.query<User[]>('SELECT * FROM users WHERE username = ?', [username]);
  return rows[0] || null;
};

export const findUserById = async (id: number): Promise<User | null> => {
  const [rows] = await pool.query<User[]>('SELECT * FROM users WHERE id = ?', [id]);
  return rows[0] || null;
};

export const createUser = async (username: string, password: string) => {
  const hashedPassword = await bcrypt.hash(password, 12);
  const [result] = await pool.execute(
    'INSERT INTO users (username, password) VALUES (?, ?)',
    [username, hashedPassword]
  );
  return result;
};

export const validatePassword = async (user: User, candidatePassword: string): Promise<boolean> => {
  return await bcrypt.compare(candidatePassword, user.password);
};