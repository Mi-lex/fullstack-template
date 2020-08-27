import { cleanEnv, port } from "envalid";

export default function validateEnv(): void {
    cleanEnv(process.env, {
        PORT: port({ default: 8000 }),
    });
}
