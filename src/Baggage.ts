import { Passenger } from "./Passenger";
import { FlightInstance } from "./FlightInstance";

export class Baggage {
    static forEach(arg0: (baggage: any) => void) {
        throw new Error('Method not implemented.');
    }
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