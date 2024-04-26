export class Airline {
    private name :string;
    private code : string;
    private location: string;

    constructor(name: string, code: string, location: string) {
        this.name = name;
        this.code = code;
        this.location = location;
    }

    getName(): string {
        return this.name;
    }

    getCode(): string {
        return this.code;
    }
    
    getLocation(): string {
        return this.location;
    }
}