

export class AirlineChef extends Person {
    private speciality: string;

    constructor(id: string, name: string, email: string, phone: string, speciality: string) {
        super(id, name, email, phone);
        this.speciality = speciality;
    }

    prepareMeals(): string {
        // Logic to prepare meals
        return `Preparing meals with ${this.speciality} expertise`;
    }

    getSpeciality(): string {
        return this.speciality;
    }
}