class Passenger extends Person {
    private specialMeal: MealType;
    private frequentFlyerMembership: string;
    private bookingReferenceNumber: string;

    constructor(id: string, name: string, email: string, phone: string, specialMeal: MealType, frequentFlyerMembership: string, bookingReferenceNumber: string) {
        super(id, name, email, phone);
        this.specialMeal = specialMeal;
        this.frequentFlyerMembership = frequentFlyerMembership;
        this.bookingReferenceNumber = bookingReferenceNumber;
        
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
