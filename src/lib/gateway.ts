import type { EventWithTalks, ITalk } from "./types";
const API_BASE_URL = 'http://localhost:3000/api';
type ICreateProposal = {
  title: string;
  description: string;
  duration: string;
  topic: string;
}
export const loginRequest = async (credentials: { email: string; password: string }): Promise<{
  token: string;
  userId: number;
  name: string;
}> =>
{
  const response = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
  const {data} = await response.json();
  return data;
}

export const getEventRequest = async (eventId: string): Promise<EventWithTalks> => {
  const response = await fetch(`${API_BASE_URL}/organizers/events/${eventId}`);
  const {data} = await response.json();
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

export const getTalkDetail = async (talkID: string) => {
  const response = await fetch(`${API_BASE_URL}/candidates/talks/details/${talkID}`);
  const {data} = await response.json();
  return data;
}

