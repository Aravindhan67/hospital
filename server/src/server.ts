import { createApp } from './app';
import { ENV } from './config/env';
import { connectDB } from './config/db';

export const startServer = () => {
  const app = createApp();

  const server = app.listen(ENV.PORT, () => {
    console.log(`====================================================`);
    console.log(`  HMS Backend Server Running`);
    console.log(`  Mode:        ${ENV.NODE_ENV}`);
    console.log(`  Port:        ${ENV.PORT}`);
    console.log(`  Health API:  http://localhost:${ENV.PORT}/api/health`);
    console.log(`====================================================`);
  });

  // Connect to Database asynchronously so the server starts immediately
  connectDB().catch((err) => {
    console.warn('[Database Connection Error]', err.message);
  });

  const handleShutdown = () => {
    console.log('\n[Server] Graceful shutdown initiated...');
    server.close(() => {
      console.log('[Server] HTTP server closed.');
      process.exit(0);
    });
  };

  process.on('SIGINT', handleShutdown);
  process.on('SIGTERM', handleShutdown);

  return server;
};

if (require.main === module) {
  startServer();
}
