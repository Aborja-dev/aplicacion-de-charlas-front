export interface TalkInsert {
  id?: number;
  title: string;
  description: string;
  duration: string;
  topic: string;
  status: string;
  candidateId: number;
  eventId: number;
  createdAt: string;
  date: string;
  time: string;
  room: string;
}

export interface ForTalkOutput {
    id: number;
    title: string;
    topic: string;
    status: string;
    speaker: string;
    date: string;
    time: string;
    room: string;
}
export interface ForTalkDetailOutput {
  id: number;
  title: string;
  description: string;
  duration: string;
  topic: string;
  status: string;
  speaker: string;
  event: string;
  createdAt: string;
  date: string;
  time: string;
  room: string;
}
export interface IMesage {
    id: string;
    content: string;
    talkId: string;
    senderId: string;
    createdAt: string;
}

export interface TalkWithMessages extends ForTalkDetailOutput {
    messages: IMesage[];
}






