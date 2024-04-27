export class Booking {
    static forEach(arg0: (booking: any) => void) {
        throw new Error('Method not implemented.');
    }
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