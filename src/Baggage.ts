import { Passenger } from "./Passenger";
import { FlightInstance } from "./FlightInstance";

export class Baggage {
    private passenger: Passenger;
    private flightInstances: FlightInstance;

    constructor(passenger: Passenger, flightInstances: FlightInstance) {
        this.passenger = passenger;
        this.flightInstances = flightInstances;
    }

    getPassenger(): Passenger {
        return this.passenger;
    }
    getFlightInstances(): FlightInstance {
        return this.flightInstances;
    }
}