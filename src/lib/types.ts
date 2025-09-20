


export interface IEvent {
    id:          number;
    title:       string;
    description: string;
    startDate:   Date;
    endDate:     Date;
    organizerId: number;
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

export interface EventWithTalks extends IEvent {
    talks: ITalk[];
}
