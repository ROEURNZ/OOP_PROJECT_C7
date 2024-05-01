



export class Airport {
    private name: string;
    private code: string;

    constructor(name: string, code: string) {
        this.name = name;
        this.code = code;
    }

    getName(): string {
        return this.name;
    }

    getCode(): string {
        return this.code;
    }
}
