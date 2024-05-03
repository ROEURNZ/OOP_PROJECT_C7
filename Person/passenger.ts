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
        this.hasReturnTicket = hasReturnTicket ? "return" : "not return"; 
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
        if (this.hasReturnTicket) {
            return []; 
        } else {
            return [];
        }
    }
}
