import dotenv from 'dotenv';
dotenv.config();

const APP_PROTOCOL = process.env.APP_PROTOCOL || 'http';
const APP_VERSION = process.env.APP_VERSION || '1.0.0';
const APP_ENGINE = process.env.APP_ENGINE || "eta"
const APP_NAME = process.env.APP_NAME || "eshop";
const APP_PORT = Number(process.env.APP_PORT) || 4000;
const APP_HOST = process.env.APP_HOST || 'localhost';
const APP_LOGS = process.env.APP_LOG_LEVEL || 'debug';
const APP_NODE = process.env.APP_NODE_ENV || "development"

const APP_IS_DEVELOPMENT = APP_NODE === "develppment";
const APP_IS_PRODUCTION = APP_NODE === "production";

const APP = {
  DEVELOPMENT: APP_IS_DEVELOPMENT,
  PRODUCTION: APP_IS_PRODUCTION,
  PROTOCOL: APP_PROTOCOL,
  VERSION: APP_VERSION,
  HOST: APP_HOST,
  PORT: APP_PORT,
  LOGS: APP_LOGS,
  NODE: APP_NODE
};

export default APP;
