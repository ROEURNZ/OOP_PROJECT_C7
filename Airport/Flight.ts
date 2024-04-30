import { FlightInstance } from './FlightInstance';
import { Airline } from './Airline';


export class Flight {
    private flightNumber: string;
    private flightInstances: FlightInstance[];
    private airline: Airline;

    constructor(flightNumber: string, airline: Airline) {
        this.flightNumber = flightNumber;
        this.flightInstances = [];
        this.airline = airline;
    }

    addFlightInstance(instance: FlightInstance) {
        this.flightInstances.push(instance);
    }

    getFlightNumber(): string {
        return this.flightNumber;
    }

    getFlightInstances(): FlightInstance[] {
        return this.flightInstances;
    }

    getAirline(): Airline {
        return this.airline;
    }
}