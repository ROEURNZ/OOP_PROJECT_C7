
import { Airport } from './Airport';
import { Flight } from "./Flight";


export class Route {
    private departureAirport: Airport;
    private destinationAirport: Airport;
    private flight: Flight;

    constructor(departureAirport: Airport, destinationAirport: Airport, flight: Flight) {
        this.departureAirport = departureAirport;
        this.destinationAirport = destinationAirport;
        this.flight = flight;
    }

    getDepartureAirport(): Airport {
        return this.departureAirport;
    }

    getDestinationAirport(): Airport {
        return this.destinationAirport;
    }

    getFlight(): Flight {
        return this.flight;
    }
}