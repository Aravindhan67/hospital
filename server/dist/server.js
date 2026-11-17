"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
const app_1 = require("./app");
const env_1 = require("./config/env");
const db_1 = require("./config/db");
const startServer = () => {
    const app = (0, app_1.createApp)();
    const server = app.listen(env_1.ENV.PORT, () => {
        console.log(`====================================================`);
        console.log(`  HMS Backend Server Running`);
        console.log(`  Mode:        ${env_1.ENV.NODE_ENV}`);
        console.log(`  Port:        ${env_1.ENV.PORT}`);
        console.log(`  Health API:  http://localhost:${env_1.ENV.PORT}/api/health`);
        console.log(`====================================================`);
    });
    // Connect to Database asynchronously so the server starts immediately
    (0, db_1.connectDB)().catch((err) => {
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
exports.startServer = startServer;
if (require.main === module) {
    (0, exports.startServer)();
}
