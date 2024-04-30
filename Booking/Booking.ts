export class Booking {
    private bookingNumber: string;
    private totalAmount: number;

    constructor(bookingNumber: string, totalAmount: number) {
        this.bookingNumber = bookingNumber;
        this.totalAmount = totalAmount;
    }

    getBookingNumber(): string {
        return this.bookingNumber;
    }

    getTotalAmount(): number {
        return this.totalAmount;
    }
}