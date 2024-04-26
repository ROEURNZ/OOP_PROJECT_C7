export class Airport {
    private name: string;
    private code: string;
    private address: string;
    private contactNUmber: string;

    constructor(name: string, code: string, address: string, contactNUmber: string) {
        this.name = name;
        this.code = code;
        this.address = address;
        this.contactNUmber = contactNUmber;

    }

    getName(): string {
        return this.name;
    }

    getCode(): string {
        return this.code;
    }

    getAddress(): string {
        return this.address;
    }
    
    getContactNUmber(): string {
        return this.contactNUmber;
    }
}