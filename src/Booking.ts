export class Booking {
    private bookingNumber: string;
    private totalAmount : string;

    constructor(bookingNumber: string, totalAmount: string) {
        this.bookingNumber = bookingNumber;
        this.totalAmount = totalAmount;
    }

    getBookingNumber(): string {
        return this.bookingNumber;
    }

    getTotalAmount(): string {
        return this.totalAmount;
    }
}