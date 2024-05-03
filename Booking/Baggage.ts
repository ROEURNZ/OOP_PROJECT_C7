import { Passenger } from "../Person/Passenger";
import { Flight } from "../Airport/Flight";

export class Baggage {
    private weight: number;
    private passenger: Passenger;
    private flight: Flight;

    constructor(weight: number, passenger: Passenger, flight: Flight) {
        this.weight = weight;
        this.passenger = passenger;
        this.flight = flight;
    }

    getWeight(): number {
        return this.weight;
    }

    getPassenger(): Passenger {
        return this.passenger;
    }

    getFlight(): Flight {
        return this.flight;
    }
}




// Additional class for BaggageTracker
export class BaggageTracker {
    private baggage: Baggage[];

    constructor() {
        this.baggage = [];
    }

    // Method to track baggage status in real-time for a passenger
    trackBaggage(passenger: Passenger): string[] {
        const trackedBaggage: string[] = [];
        this.baggage.forEach(bag => {
            if (bag.getPassenger().getID() === passenger.getID()) {
                const status = `Baggage ID: ${bag.getFlight().getFlightNumber()}-${bag.getPassenger().getName()}, Status: In Transit`;
                trackedBaggage.push(status);
            }
        });
        return trackedBaggage;
    }

    // Method to update baggage status when checked in
    updateBaggageStatus(baggage: Baggage): void {
        // Logic to update baggage status
        console.log(`Baggage for ${baggage.getPassenger().getName()} updated to In Transit`);
    }

    // Method to add baggage to the tracker
    addBaggage(baggage: Baggage): void {
        this.baggage.push(baggage);
    }
}