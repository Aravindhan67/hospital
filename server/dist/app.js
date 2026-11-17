"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const env_1 = require("./config/env");
const errorHandler_1 = require("./middleware/errorHandler");
const createApp = () => {
    const app = (0, express_1.default)();
    // Security Headers
    app.use((0, helmet_1.default)());
    // CORS Configuration
    app.use((0, cors_1.default)({
        origin: [env_1.ENV.CLIENT_URL, 'http://localhost:5173', 'http://127.0.0.1:5173'],
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
    }));
    // Body Parsing & Cookies
    app.use(express_1.default.json({ limit: '10mb' }));
    app.use(express_1.default.urlencoded({ extended: true, limit: '10mb' }));
    app.use((0, cookie_parser_1.default)());
    // HTTP Request Logging
    if (env_1.ENV.NODE_ENV !== 'test') {
        app.use((0, morgan_1.default)('dev'));
    }
    // System Health Probe Endpoint
    app.get('/api/health', (req, res) => {
        const dbState = mongoose_1.default.connection.readyState;
        const dbStatusMap = {
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
            environment: env_1.ENV.NODE_ENV,
            database: {
                state: dbStatusMap[dbState] || 'Unknown',
                connected: dbState === 1
            },
            version: '1.0.0'
        });
    });
    // Root Welcome Endpoint
    app.get('/', (req, res) => {
        res.json({
            success: true,
            message: 'Professional Hospital Management System API is active.',
            healthCheck: '/api/health'
        });
    });
    // Centralized Error Handling Middleware
    app.use(errorHandler_1.errorHandler);
    return app;
};
exports.createApp = createApp;
