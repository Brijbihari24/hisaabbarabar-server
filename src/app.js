import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import pinoHttp from 'pino-http';
import { env } from './config/env.js';
import { logger } from './config/logger.js';
import healthRoutes from './modules/health/health.routes.js';
import { notFound, errorHandler } from './middlewares/errorHandler.js';

const app = express();

app.set('trust proxy', 1);
app.use(pinoHttp({ logger }));
app.use(helmet());
app.use(cors({ origin: env.CLIENT_URL, credentials: true }));
app.use(express.json({ limit: '10kb' }));

app.use('/api/v1', healthRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
