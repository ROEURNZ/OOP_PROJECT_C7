
import { Airport } from './Airport';
import { FlightInstance } from "./FlightInstance";

export class Leg {
    private departureAirport: Airport;
    private destinationAirport: Airport;
    private flightInstance: FlightInstance;

    constructor(departureAirport: Airport, destinationAirport: Airport, flightInstance: FlightInstance) {
        this.departureAirport = departureAirport;
        this.destinationAirport = destinationAirport;
        this.flightInstance = flightInstance;
    }

    getDepartureAirport(): Airport {
        return this.departureAirport;
    }

    getDestinationAirport(): Airport {
        return this.destinationAirport;
    }

    getFlightInstance(): FlightInstance {
        return this.flightInstance;
    }
}