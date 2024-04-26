export class Person {
    private id: string;
    private name: string;
    private email: string;
    private phone: string;

    constructor(){

    }

    getId(): string {
        return this.id;
    }
    getName(): string {
        return this.name;
    }
    getEmail(): string {
        return this.email;
    }
    getPhone(): string {
        return this.phone;
    }
}