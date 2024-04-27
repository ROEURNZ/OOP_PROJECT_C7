// File Crew.ts

import { Person } from './Person'; 

class Crew extends Person {
    private position: string;
    private salary: number; 

    constructor(id: string, name: string, email: string, phone: string, position: string, salary: number) {
        super(id, name, email, phone);
        this.position = position;
        this.salary = salary;
    }
     
    getPosition(): string {
        return this.position;
    }

    getSalary(): number {
        return this.salary;
    }
}
