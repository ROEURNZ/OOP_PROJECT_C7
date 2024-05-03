import { CabinClass } from "../Utilities/Enumerations"; // Assuming you have a CabinClass enum defined

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



// Define the Seat class
export class Seat {
    constructor(public seatNumber: string, public cabinClass: CabinClass) {}
}

// Define the AircraftLayout class
export class AircraftLayout {
    private seatsByClass: Map<CabinClass, Seat[]> = new Map();

    addSeats(cabinClass: CabinClass, seats: Seat[]) {
        this.seatsByClass.set(cabinClass, seats);
    }

    getSeats(cabinClass: CabinClass): Seat[] {
        return this.seatsByClass.get(cabinClass) || [];
    }
}
