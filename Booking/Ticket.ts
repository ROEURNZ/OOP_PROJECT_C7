import { Passenger } from '../Person/Passenger';

export class Ticket {
    private fareBasis: string;
    private classType: ClassType;
    private seatNumber: string;
    private mealType: MealType;
    private passenger: Passenger;
    private flight: Flight;
    private ticketClass: TicketClass;

    constructor(
        fareBasis: string,
        classType: ClassType,
        seatNumber: string,
        mealType: MealType,
        passenger: Passenger,
        flight: Flight,
        ticketClass: TicketClass
    ) {
        this.fareBasis = fareBasis;
        this.classType = classType;
        this.seatNumber = seatNumber;
        this.mealType = mealType;
        this.passenger = passenger;
        this.flight = flight;
        this.ticketClass = ticketClass;
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