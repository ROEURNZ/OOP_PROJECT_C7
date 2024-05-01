import { Person } from "../Person/Person";
import { Flight } from "../Airport/Flight";

export class AirlineController extends Person {
    private flights: Flight[];

    constructor(id: string, name: string, email: string, phone: string, flights: Flight[]) {
        super(id, name, email, phone);
        this.flights = flights;
    }


    // Method to get booking details for flights using Booking Reference Number (//! User Story 1)
    getBookingDetails(): string {
        // Logic to get booking details
        return "Booking details for flights";
    }

    getFlights(): Flight[] {
        return this.flights;
    }
}
