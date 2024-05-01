
import { Person } from '../Person/Person';
import { CrewMember } from "../Utilities/Enumerations"; 

export class Crew extends Person {
    private position: CrewMember;
    private salary: number;

    constructor(id: string, name: string, email: string, phone: string, position: CrewMember, salary: number) {
        super(id, name, email, phone);
        this.position = position;
        this.salary = salary;
    }

    getPosition(): CrewMember {
        return this.position;
    }

    getSalary(): number {
        return this.salary;
    }
}