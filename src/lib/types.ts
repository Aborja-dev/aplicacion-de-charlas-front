


export interface IEvent {
    id:          number;
    title:       string;
    description: string;
    startDate:   Date;
    endDate:     Date;
    organizerId: number;
    location: string;
    maxAttendees: number;
}

export interface ITalk {
    id:          string;
    title:       string;
    description: string;
    duration:    string;
    topic:       string;
    status:      string;
    candidateId: string;
    eventId:     string;
    createdAt:   Date;
}
export interface IMessage {
    id:        string;
    content:   string;
    talkId:    string;
    senderId:  string;
    createdAt: Date;
}

export type ISession = {
    token: string;
    userId: number;
    name: string;
}

export interface ISpeaker {
    id:          string;
    name:        string;
    position:    string;
    description: string;
    image:       string;
    socials: {
        twitter: string;
        linkedin: string;
        profile: string;
    }
}   

export type ITalkDetail = ITalk & {
    messages: IMessage[];
}

export interface EventWithTalks extends IEvent {
    talks: ITalk[];
}
