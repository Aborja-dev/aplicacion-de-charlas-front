import type { ForTalkCreateRequest, ForTalkOutput } from "../domain/api";
import type { TalkWithMessages } from "../domain/domain";
import type { EventWithTalks, ITalk,IEvent, ITalkDetail, ISession } from "./types";
import { getSession } from "./utils";
const API_BASE_URL = 'http://localhost:3000/api';

export const loginRequest = async (credentials: { email: string; password: string }): Promise<ISession> =>
{
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
  const {data} = await response.json();
  return data;
}
export const getEventsRequest = async (): Promise<IEvent[]> => {
  const response = await fetch(`${API_BASE_URL}/events`);
  const data = await response.json();
  return data;
}
export const getEventRequest = async (eventId: string): Promise<EventWithTalks> => {
  const response = await fetch(`${API_BASE_URL}/events/${eventId}`);
  const data = await response.json();
  return data;
}
export const getUserTalksRequest = async (token: string): Promise<ForTalkOutput[]> => {
  const response = await fetch(`${API_BASE_URL}/talks`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
}
export const createProposal = async (eventId: string, proposal: ForTalkCreateRequest): Promise<ITalk> => {
  const token = getSession()?.token;
  console.log(token);
  debugger
    const response = await fetch(`${API_BASE_URL}/talks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          eventId,
          proposal
        }),
    });
    const {data} = await response.json();
    return data;
}

export const getTalkDetail = async (talkID: string, token: string): Promise<TalkWithMessages> => {
  const response = await fetch(`${API_BASE_URL}/talks/detail/${talkID}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
}
export const sendMessageRequest = async ({talkId, message}: {talkId: string, message: string}) => {
  const url = new URL(`${API_BASE_URL}/messages/${talkId}`)
  url.searchParams.set("talkId", talkId);
  const response = await fetch(url.href, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({content: message, senderId: "1"}),
  });
  const data = await response.json();
  return data;
}
export const getAllTalksRequest = async (): Promise<ITalk[]> => {
  const response = await fetch(`${API_BASE_URL}/talks/all`);
  const data = await response.json();
  return data;
}
export const createEvent = async (event: Omit<IEvent, "id" >) => {
  const response = await fetch(`${API_BASE_URL}/events`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(event),
  });
  const data = await response.json();
  return data;
}
