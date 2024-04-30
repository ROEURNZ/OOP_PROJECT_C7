export class Airport {
    private name: string;
    private code: string;
    private address: string;
    private contactNumber: string;

    constructor(name: string, code: string, address: string, contactNumber: string) {
        this.name = name;
        this.code = code;
        this.address = address;
        this.contactNumber = contactNumber;
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

    getContactNumber(): string {
        return this.contactNumber;
    }
}