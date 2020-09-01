import fetch from 'isomorphic-fetch';

interface ISendRequest extends RequestInit {
    url: string;
    data?: Record<string, unknown>;
    headers?: HeadersInit;
}

export const sendHttpRequest = function sendHttpRequest({
    url,
    data,
    headers,
    ...options
}: ISendRequest): Promise<Response> {
    return fetch(url, {
        body: data ? JSON.stringify(data) : undefined,
        ...options as RequestInit,
        headers: {
            'Content-Type': 'application/json',
            ...headers,
        },
    });
};
