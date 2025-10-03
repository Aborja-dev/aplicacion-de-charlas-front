import z from "zod";

// api body request crear charla
export const ForTalkCreateRequestSchema = z.object({
    title: z.string().min(1, "El título es requerido"),
    description: z.string().min(1, "La descripción es requerida"),
    duration: z.string().min(1, "La duración es requerida"),
    topic: z.string().min(1, "El tema es requerido"),
    date: z.string().min(1, "La fecha es requerida"),
    time: z.string().min(1, "La hora es requerida"),
    room: z.string().min(1, "La sala es requerida")
  });
  
  export type ForTalkCreateRequest = z.infer<typeof ForTalkCreateRequestSchema>;

  // api output
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
// api detail output
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
  messages: {
    id: number;
    content: string;
    talkId: number;
    senderId: number;
    createdAt: string;
  }[];
}