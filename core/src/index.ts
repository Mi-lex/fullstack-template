import process from 'process';
import 'dotenv/config';
import { logger } from './config/logger';
import { app } from './config/express';
import env from './utils/validators/env';

try {
    app.listen(env.PORT, () =>
        logger.warn(
            `${env.PROJECT_NAME} core started on port ${env.PORT} (${env.NODE_ENV})`
        )
    );
} catch (err) {
    logger.error(err.message);
    process.exit();
}
