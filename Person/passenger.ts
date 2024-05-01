import { MealType } from "../Utilities/Enumerations";
import { Person } from "./Person";
import { Ticket } from "../Booking/Ticket";

export class Passenger extends Person {
    private specialMeal: MealType;
    private frequentFlyerMembership: string;
    private bookingReferenceNumber: string;
    public hasReturnTicket: string; 

    constructor(
        id: string,
        name: string,
        email: string,
        phone: string,
        specialMeal: MealType,
        frequentFlyerMembership: string,
        bookingReferenceNumber: string,
        hasReturnTicket: boolean
    ) {
        super(id, name, email, phone);
        this.specialMeal = specialMeal;
        this.frequentFlyerMembership = frequentFlyerMembership;
        this.bookingReferenceNumber = bookingReferenceNumber;
        this.hasReturnTicket = hasReturnTicket ? "return" : "not return"; // Assign string value
    }

    getSpecialMeal(): MealType {
        return this.specialMeal;
    }

    getFrequentFlyerMembership(): string {
        return this.frequentFlyerMembership;
    }

    getBookingReferenceNumber(): string {
        return this.bookingReferenceNumber;
    }

    getTickets(): Ticket[] {
        // If passenger has return tickets, return actual tickets associated with the passenger
        if (this.hasReturnTicket) {
            // Replace [] with actual implementation to retrieve tickets
            return []; 
        } else {
            // If passenger doesn't have return tickets, return an empty array
            return [];
        }
    }
}
