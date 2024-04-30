import { FlightInstance } from './FlightInstance';
import { Airline } from './Airline';
import { Passenger } from '../Person/passenger';


export class Flight {
    private flightNumber: string;
    private flightInstances: FlightInstance[];
    private airline: Airline;
    private passenger: Passenger[];

    constructor(flightNumber: string, airline: Airline) {
        this.flightNumber = flightNumber;
        this.flightInstances = [];
        this.airline = airline;
    }

    addFlightInstance(instance: FlightInstance) {
        this.flightInstances.push(instance);
    }
    addPassenger(passenger: Passenger){
        this.passenger.push(passenger);
    };
    
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