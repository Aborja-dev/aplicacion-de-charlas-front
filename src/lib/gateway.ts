import type { EventWithTalks, ITalk,IEvent, ITalkDetail, ISession } from "./types";
const API_BASE_URL = 'http://localhost:3000/api';
type ICreateProposal = {
  title: string;
  description: string;
  duration: string;
  topic: string;
}
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
export const getUserTalksRequest = async (candidateId: string): Promise<ITalk[]> => {
  const url = new URL(`${API_BASE_URL}/talks`)
  url.searchParams.set("candidateId", candidateId);
  const response = await fetch(url.href);
  const data = await response.json();
  return data;
}
export const createProposal = async (eventId: string, proposal: ICreateProposal): Promise<ITalk> => {
    const response = await fetch(`${API_BASE_URL}/candidates/events/${eventId}/proposals`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(proposal),
    });
    const {data} = await response.json();
    return data;
}

export const getTalkDetail = async (talkID: string): Promise<ITalkDetail> => {
  const url = new URL(`${API_BASE_URL}/talks/detail`)
  url.searchParams.set("talkId", talkID);
  const response = await fetch(url.href);
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