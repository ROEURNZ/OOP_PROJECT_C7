import { Passenger } from "../Person/Passenger";
import { FlightInstance } from "../Airport/FlightInstance";

export class Baggage {
    private passenger: Passenger;

    constructor(passenger: Passenger) {
        this.passenger = passenger;
    }

    getPassenger(): Passenger {
        return this.passenger;
    }
}
