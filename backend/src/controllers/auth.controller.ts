import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { findUserByUsername, validatePassword } from '../models/user.model';
import { ApiError } from '../utils/apiError';

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, password } = req.body;

    // Validate input
    if (!username || !password) {
      return next(new ApiError('Username and password are required', 400));
    }

    // Find user
    const user = await findUserByUsername(username);
    if (!user) {
      return next(new ApiError('Invalid credentials', 401));
    }

    // Validate password
    const isPasswordValid = await validatePassword(user, password);
    if (!isPasswordValid) {
      return next(new ApiError('Invalid credentials', 401));
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '1d' }
    );

    res.status(200).json({
      status: 'success',
      data: {
        user: {
          id: user.id,
          username: user.username
        },
        token
      }
    });
  } catch (error) {
    next(error);
  }
};

export const getMe = async (req: Request, res: Response) => {
  // The user is already attached to the request by the auth middleware
  const user = req.user;

  res.status(200).json({
    status: 'success',
    data: {
      user
    }
  });
};
