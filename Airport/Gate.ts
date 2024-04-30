
import { Airport } from "./Airport";
export class Gate {
    private airport: Airport;

    constructor(airport: Airport) {
        this.airport = airport;
    }

    getAirport(): Airport {
        return this.airport;
    }
}