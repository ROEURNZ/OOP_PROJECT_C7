class Crew extends Person {
    private position : string;
    private salary : string

    constructor(id: string, name: string, email: string, phone: string, position : string, salary : string) {
        super (id, name, email, phone);
        this.position = position
        this.salary = salary
    }
     
    getPosition(): string {
         return this.position
    }
    getSalary(): string {
        return this.salary
    }
}