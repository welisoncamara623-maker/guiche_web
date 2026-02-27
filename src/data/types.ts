export interface FaqItem {
    question: string;
    answer: string;
}

export interface Contact {
    email: string;
    phones: string[];
    serviceHours: string;
}

export interface Ticket {
    id: string;
    name: string;
    lote: string;
    price: number;
    saibaMais: boolean,
    esgoted: boolean
}

export interface Sector {
    id: string;
    title: string;
    description: string;
    color: string;
    tickets: Ticket[];
}

export interface BaseEvent {
    subtitle: string;
    time: string;
    about: string[];
    faq: FaqItem[];
    importantInfo: string[];
    contact: Contact;
}

export interface Event extends BaseEvent {
    id: string;
    imageSrc: string;
    bg_ticket: string;
    bg_color: string;
    title: string;
    location: string;
    city: string;
    locationImage: string;
    date: string;
    sectors: Sector[];
}
