import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import { ENV } from './config/env';
import { errorHandler } from './middleware/errorHandler';

export const createApp = (): Application => {
  const app = express();

  // Security Headers
  app.use(helmet());

  // CORS Configuration
  app.use(
    cors({
      origin: [ENV.CLIENT_URL, 'http://localhost:5173', 'http://127.0.0.1:5173'],
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
    })
  );

  // Body Parsing & Cookies
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true, limit: '10mb' }));
  app.use(cookieParser());

  // HTTP Request Logging
  if (ENV.NODE_ENV !== 'test') {
    app.use(morgan('dev'));
  }

  // System Health Probe Endpoint
  app.get('/api/health', (req: Request, res: Response) => {
    const dbState = mongoose.connection.readyState;
    const dbStatusMap: Record<number, string> = {
      0: 'Disconnected',
      1: 'Connected',
      2: 'Connecting',
      3: 'Disconnecting'
    };

    res.status(200).json({
      success: true,
      service: 'Hospital Management System (HMS) API',
      status: 'OPERATIONAL',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: ENV.NODE_ENV,
      database: {
        state: dbStatusMap[dbState] || 'Unknown',
        connected: dbState === 1
      },
      version: '1.0.0'
    });
  });

  // Root Welcome Endpoint
  app.get('/', (req: Request, res: Response) => {
    res.json({
      success: true,
      message: 'Professional Hospital Management System API is active.',
      healthCheck: '/api/health'
    });
  });

  // Centralized Error Handling Middleware
  app.use(errorHandler);

  return app;
};
