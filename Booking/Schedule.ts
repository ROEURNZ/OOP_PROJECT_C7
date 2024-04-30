
import { FlightInstance } from "../Airport/FlightInstance";

export class Schedule {
    private date: Date;
    private departureTime: Date;
    private flightInstance: FlightInstance;

    constructor(date: Date, departureTime: Date, flightInstance: FlightInstance) {
        this.date = date;
        this.departureTime = departureTime;
        this.flightInstance = flightInstance;
    }

    getDate(): Date {
        return this.date;
    }

    getDepartureTime(): Date {
        return this.departureTime;
    }

    getFlightInstance(): FlightInstance {
        return this.flightInstance;
    }
}
