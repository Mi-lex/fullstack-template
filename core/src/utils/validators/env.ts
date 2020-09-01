import { cleanEnv, port, str } from 'envalid';

export default cleanEnv(process.env, {
    PROJECT_NAME: str({ default: 'Template' }),
    PORT: port({ default: 8000 }),
    TELEGRAM_CHAT_ID: str({ default: '' }),
    TELEGRAM_BOT_TOKEN: str({ default: '' }),
    NODE_ENV: str({ default: 'development' }),
});
