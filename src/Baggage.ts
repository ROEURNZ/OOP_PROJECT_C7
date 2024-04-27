import { Passenger } from "./Passenger";
import { FlightInstance } from "./FlightInstance";

export class Baggage {
    private passenger: Passenger;

    constructor(passenger: Passenger) {
        this.passenger = passenger;
    }

    getPassenger(): Passenger {
        return this.passenger;
    }
}
