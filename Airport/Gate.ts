

import { Airport } from "./Airport";
import { Flight } from "./Flight";

export class Gate {
    private number: number;
    private airport: Airport;
    private flight: Flight;

    constructor(number: number, airport: Airport, flight: Flight) {
        this.number = number;
        this.airport = airport;
        this.flight = flight;
    }

    getNumber(): number {
        return this.number;
    }

    getAirport(): Airport {
        return this.airport;
    }

    getFlight(): Flight {
        return this.flight;
    }
}