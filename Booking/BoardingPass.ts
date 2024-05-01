import { Flight } from "../Airport/Flight";
import { Passenger } from "../Person/Passenger";

export class BoardingPass {
    private passenger: Passenger;
    private flight: Flight;
    private seatNumber: string;

    constructor(passenger: Passenger, flight: Flight, seatNumber: string) {
        this.passenger = passenger;
        this.flight = flight;
        this.seatNumber = seatNumber;
    }

    getPassenger(): Passenger {
        return this.passenger;
    }

    getFlight(): Flight {
        return this.flight;
    }

    getSeatNumber(): string {
        return this.seatNumber;
    }
}