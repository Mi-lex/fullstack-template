import { sendHttpRequest } from '../../utils/http/sendHttpRequest';

const MAX_MESSAGE_LENGTH = 4096;

export const sendMessage = async (
    chatId: string,
    botToken: string,
    message: string
): Promise<Response> => {
    return sendHttpRequest({
        url: `https://api.telegram.org/bot${botToken}/sendMessage`,
        method: 'POST',
        data: {
            chat_id: chatId,
            text: message.substring(0, MAX_MESSAGE_LENGTH),
        },
    });
};
