"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const zod_1 = require("zod");
const errorHandler = (err, req, res, next) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || 'Internal Server Error';
    if (err instanceof zod_1.ZodError) {
        statusCode = 400;
        message = 'Validation failed';
        return res.status(statusCode).json({
            success: false,
            message,
            errors: err.errors.map((e) => ({
                field: e.path.join('.'),
                message: e.message
            }))
        });
    }
    // Handle Mongoose duplicate key error
    if (err.code === 11000) {
        statusCode = 409;
        const field = Object.keys(err.keyPattern || {})[0] || 'field';
        message = `Duplicate value entered for ${field}. It must be unique.`;
    }
    // Handle CastError (invalid ObjectId)
    if (err.name === 'CastError') {
        statusCode = 400;
        message = 'Resource not found: Invalid ID format';
    }
    console.error(`[Error] ${req.method} ${req.originalUrl}:`, err);
    return res.status(statusCode).json({
        success: false,
        message,
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
};
exports.errorHandler = errorHandler;
