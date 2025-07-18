import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { findUserById } from '../models/user.model';
import { ApiError } from '../utils/apiError';

// Extend Express Request interface to include user property
declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export const protect = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // 1) Check if token exists
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return next(new ApiError('You are not logged in. Please log in to get access.', 401));
    }

    // 2) Verify token
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');

    // 3) Check if user still exists
    const currentUser = await findUserById(decoded.id);
    if (!currentUser) {
      return next(new ApiError('The user belonging to this token no longer exists.', 401));
    }

    // 4) Grant access to protected route
    req.user = currentUser;
    next();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return next(new ApiError('Invalid token. Please log in again.', 401));
    }
    if (error instanceof jwt.TokenExpiredError) {
      return next(new ApiError('Your token has expired. Please log in again.', 401));
    }
    next(error);
  }
};