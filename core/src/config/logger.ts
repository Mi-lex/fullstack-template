import {
    createLogger,
    format as _format,
    transports as _transports,
} from 'winston';
import { TelegramTransport } from '../externalServices/telegram/telegramTransport';

const { TELEGRAM_CHAT_ID, TELEGRAM_BOT_TOKEN } = process.env;

const transports = [];
if (TELEGRAM_CHAT_ID && TELEGRAM_BOT_TOKEN) {
    transports.push(
        new TelegramTransport({
            botToken: TELEGRAM_BOT_TOKEN,
            chatId: TELEGRAM_CHAT_ID,
        })
    );
}

const logger = createLogger({
    level: 'info',
    format: _format.combine(
        _format.timestamp(),
        _format((info) => {
            // eslint-disable-next-line no-param-reassign
            info.message = `Log ${info.level} on core:\n${info.message}`;
            return info;
        })()
    ),
    transports,
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(
        new _transports.Console({
            format: _format.simple(),
        })
    );
}

const _logger = logger;

export { _logger as logger };
