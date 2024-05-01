

export class TicketClass {
    private id: string;
    private name: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    getDetails(): string {
        return `Ticket Class Details:\nID: ${this.id}\nName: ${this.name}`;
    }

    getID(): string {
        return this.id;
    }

    getName(): string {
        return this.name;
    }
}


