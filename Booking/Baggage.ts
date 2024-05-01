import { Passenger } from "../Passenger";

export class Baggage {
    private weight: number;
    private passenger: Passenger;
    private flight: Flight;

    constructor(weight: number, passenger: Passenger, flight: Flight) {
        this.weight = weight;
        this.passenger = passenger;
        this.flight = flight;
    }

    getWeight(): number {
        return this.weight;
    }

    getPassenger(): Passenger {
        return this.passenger;
    }

    getFlight(): Flight {
        return this.flight;
    }
}