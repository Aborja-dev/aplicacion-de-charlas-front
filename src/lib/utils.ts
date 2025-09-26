import type { ISession } from "./types";

export const saveSession = (user: ISession) => {
    localStorage.setItem("user", JSON.stringify(user));
}
export const getSession = (): ISession | null => {
    return JSON.parse(localStorage.getItem("user") || "{}");
}
export const deleteSession = () => {
    localStorage.removeItem("user");
}
