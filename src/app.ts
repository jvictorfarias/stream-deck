/* eslint-disable no-console */
import 'reflect-metadata';
import 'dotenv/config';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import morgan from 'morgan';
import routes from './routes';

import AppError from './errors/AppError';

import uploadConfig from './config/upload';

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

// Middleware de tratativa de erros
app.use(
  (error: Error, _request: Request, response: Response, _: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    console.log(error);

    return response.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
    });
  },
);

export default app;
