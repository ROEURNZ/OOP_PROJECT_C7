
export class Aircraft {
    private registrationNumber: string;
    private model: string;
    private capacity: number;

    constructor(registrationNumber: string, model: string, capacity: number) {
        this.registrationNumber = registrationNumber;
        this.model = model;
        this.capacity = capacity;
    }

    getRegistrationNumber(): string {
        return this.registrationNumber;
    }

    getModel(): string {
        return this.model;
    }

    getCapacity(): number {
        return this.capacity;
    }
}