import { Passenger } from '../Person/Passenger';
import { ClassType, MealType } from "../Utilities/Enumerations";
import { TicketClass } from "./TicketClass";
import { Flight } from "../Airport/Flight";

export class Ticket {
    private bookingReferenceNumber: string;  // Added booking reference number property
    private fareBasis: string;
    private classType: ClassType;
    private seatNumber: string;
    private mealType: MealType;
    private passenger: Passenger;
    private flight: Flight;
    private ticketClass: TicketClass;

    constructor(
        bookingReferenceNumber: string,  // Added as a parameter
        fareBasis: string,
        classType: ClassType,
        seatNumber: string,
        mealType: MealType,
        passenger: Passenger,
        flight: Flight,
        ticketClass: TicketClass
    ) {
        this.bookingReferenceNumber = bookingReferenceNumber;  // Initialize the booking reference number
        this.fareBasis = fareBasis;
        this.classType = classType;
        this.seatNumber = seatNumber;
        this.mealType = mealType;
        this.passenger = passenger;
        this.flight = flight;
        this.ticketClass = ticketClass;
    }

    getBookingReferenceNumber(): string {
        return this.bookingReferenceNumber;  // Getter for booking reference number
    }

    getFareBasis(): string {
        return this.fareBasis;
    }

    getClassType(): ClassType {
        return this.classType;
    }

    getSeatNumber(): string {
        return this.seatNumber;
    }

        // New setter for seat number
    setSeatNumber(newSeatNumber: string): void {
        this.seatNumber = newSeatNumber;
    }

    getMealType(): MealType {
        return this.mealType;
    }

    getPassenger(): Passenger {
        return this.passenger;
    }

    getFlight(): Flight {
        return this.flight;
    }

    getTicketClass(): TicketClass {
        return this.ticketClass;
    }
}
