import { FlightInstance } from "../Airport/FlightInstance";
import { Passenger } from "../Passenger";

export class BoardingPass {
    private passenger: Passenger;
    private flightInstance: FlightInstance;

    constructor(passenger: Passenger, flightInstance: FlightInstance) {
        this.passenger = passenger;
        this.flightInstance = flightInstance;
    }

    getPassenger(): Passenger {
        return this.passenger;
    }

    getFlightInstance(): FlightInstance {
        return this.flightInstance;
    }
}