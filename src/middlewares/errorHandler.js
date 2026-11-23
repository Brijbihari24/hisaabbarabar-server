import { logger } from '../config/logger.js';

export function notFound(req, res) {
  res.status(404).json({ error: { code: 'NOT_FOUND', message: 'Route not found' } });
}

export function errorHandler(err, req, res, _next) {
  const status = err.status || 500;
  if (status >= 500) logger.error({ err }, 'Unhandled error');
  res.status(status).json({
    error: {
      code: err.code || (status === 500 ? 'INTERNAL_ERROR' : 'ERROR'),
      message: status === 500 ? 'Something went wrong' : err.message,
    },
  });
}
