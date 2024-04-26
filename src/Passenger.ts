export class Passenger {
    private id: number;
    private name: string;
    private tel: string;
    private emails: string;

    constructor(id: number, name: string, tel: string, emails: string) {
        this.id = id;
        this.name = name;
        this.tel = tel;
        this.emails = emails;
    }

    getId() {
        return this.id;
    }


    getName(): string {
        return this.name;
    }

    getTel(): string {
        return this.tel;
    }


    getEmails(): string {
        return this.emails;
    }
}
