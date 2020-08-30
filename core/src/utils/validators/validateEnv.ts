import { cleanEnv, port, str } from "envalid";

export default function validateEnv(): void {
    cleanEnv(process.env, {
        PORT: port({ default: 8000 }),
        TELEGRAM_CHAT_ID: str(),
        TELEGRAM_BOT_TOKEN: str()
    });
}
