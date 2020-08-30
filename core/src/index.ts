import 'dotenv/config';
import { logger } from "./config/logger"
import validateEnv from './utils/validators/validateEnv'

validateEnv();

logger.info('Test');
