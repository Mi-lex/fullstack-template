import * as Transport from "winston-transport";
import { LogEntry } from "winston";
import { sendMessage } from "./telegram";

type TelegramTransportProps = {
    botToken: string;
    chatId: string;
};

export class TelegramTransport extends Transport {
    private botToken: string;
    private chatId: string;

    constructor({ botToken, chatId }: TelegramTransportProps) {
        super();

        this.botToken = botToken;
        this.chatId = chatId;
    }

    public log(info: LogEntry, callback: () => void): void {
        if (info.level === "info") {
            callback();
            return;
        }
        sendMessage(this.chatId, this.botToken, info.message)
            .then(() => {
                callback();
            })
            .catch((e) => {
                // eslint-disable-next-line no-console
                console.error(
                    `!!! UNABLE SEND TELEGRAM ${info.level} MESSAGE !!!:\n${info.message}`
                );
                // eslint-disable-next-line no-console
                console.error(e);
                callback();
            });
    }
}
