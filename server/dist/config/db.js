"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const env_1 = require("./env");
const connectDB = async () => {
    try {
        const conn = await mongoose_1.default.connect(env_1.ENV.MONGODB_URI, {
            serverSelectionTimeoutMS: 5000
        });
        console.log(`[Database] MongoDB Connected: ${conn.connection.host}/${conn.connection.name}`);
    }
    catch (error) {
        console.warn(`[Database Warning] Could not connect to MongoDB at ${env_1.ENV.MONGODB_URI}: ${error.message}`);
        console.warn(`[Database Warning] Server will remain active; database requests will retry.`);
    }
};
exports.connectDB = connectDB;
mongoose_1.default.connection.on('disconnected', () => {
    console.warn('[Database] MongoDB disconnected');
});
mongoose_1.default.connection.on('error', (err) => {
    console.error('[Database Error]', err);
});
