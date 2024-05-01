import { MealType } from "../Meal/Meal";
import { Person } from "./person";
export class Passenger extends Person {
    private specialMeal: MealType;
    private frequentFlyerMembership: string;
    private bookingReferenceNumber: string;
    public hasReturnTicket: boolean;
    name : string;

    constructor(id: string, name: string, email: string, phone: string, specialMeal: MealType, frequentFlyerMembership: string, bookingReferenceNumber: string, hasReturnTicket: boolean) {
        super(id, name, email, phone);
        this.specialMeal = specialMeal;
        this.frequentFlyerMembership = frequentFlyerMembership;
        this.bookingReferenceNumber = bookingReferenceNumber;
        this.hasReturnTicket = hasReturnTicket;
        this.name = name;
        
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

}

