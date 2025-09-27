import type { ISession } from "./types";

const SESSION_COOKIE = 'user_session';
const COOKIE_EXPIRY_DAYS = 7;

const setCookie = (name: string, value: string, days: number) => {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${encodeURIComponent(value)};${expires};path=/;SameSite=Strict`;
};

const getCookie = (name: string): string | null => {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
};

export const saveSession = (user: ISession) => {
    setCookie(SESSION_COOKIE, JSON.stringify(user), COOKIE_EXPIRY_DAYS);
};


export const deleteSession = () => {
    document.cookie = `${SESSION_COOKIE}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;`;
};
