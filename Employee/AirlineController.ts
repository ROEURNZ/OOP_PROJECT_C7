import { Person } from "../Person/Person";
import { Passenger } from "../Person/Passenger";
import { Flight } from "../Airport/Flight";
import { Airport } from "../Airport/Airport";
import { Airline } from "../Airport/Airline";
import { Aircraft } from "../Airport/Aircraft";

export class AirlineController extends Person {
    private flights: Flight[];

    constructor(id: string, name: string, email: string, phone: string, flights: Flight[]) {
        super(id, name, email, phone);
        this.flights = flights;
    }

    // Method to get booking details for flights using Booking Reference Number
    getBookingDetails(bookingRef: string): string | null {
        for (const flight of this.flights) {
            const ticket = flight.getTickets().find(ticket => ticket.getBookingReferenceNumber() === bookingRef);
            if (ticket) {
                const passenger = ticket.getPassenger();
                return `Booking Reference: ${bookingRef}, Passenger: ${passenger.getName()}, Flight: ${flight.getFlightNumber()}`;
            }
        }
        return null; // Return null if no booking is found
    }

    getFlights(): Flight[] {
        return this.flights;
    }
}




// Additional class for SecurityOfficer
export class SecurityOfficer extends Person {
    private airline: Airline;

    constructor(id: string, name: string, email: string, phone: string, airline: Airline) {
        super(id, name, email, phone);
        this.airline = airline;
    }

    // Method to get list of passengers on a specific flight
    getPassengersOnFlight(flight: Flight): Passenger[] {
        const passengers: Passenger[] = [];
        for (const ticket of flight.getTickets()) {
            passengers.push(ticket.getPassenger());
        }
        return passengers;
    }
}



//? ============================ Additional =====================================
// Additional class for CustomerServiceRepresentative
export class CustomerServiceRepresentative extends Person {
    private airline: Airline;

    constructor(id: string, name: string, email: string, phone: string, airline: Airline) {
        super(id, name, email, phone);
        this.airline = airline;
    }

    // Method to view seating assignments and update them for passengers
    updateSeatingAssignments(passenger: Passenger, newSeatNumber: string): void {
        const flights = this.airline.getFlights();
        for (const flight of flights) {
            const ticket = flight.getTickets().find(t => t.getPassenger().getID() === passenger.getID());
            if (ticket) {
                ticket.setSeatNumber(newSeatNumber);
                console.log(`Seating assignment for ${passenger.getName()} updated to seat ${newSeatNumber}`);
                return;
            }
        }
        console.log("Passenger not found on any flight.");
    }
}


// Additional class for MaintenanceCrewMember
export class MaintenanceCrewMember extends Person {
    getMaintenanceSchedule(aircraft: Aircraft): string[] {
        // This should be replaced with actual data retrieval
        return [`Next maintenance for ${aircraft.getModel()} is due on ${new Date().toDateString()}`];
    }
}



// Additional class for OperationsManager
export class OperationsManager extends Person {
    private airline: Airline;

    constructor(id: string, name: string, email: string, phone: string, airline: Airline) {
        super(id, name, email, phone);
        this.airline = airline;
    }

    // Method to view daily flight operations reports
    viewDailyOperationsReport(date: Date): string {
        const flightsOnDate = this.airline.getFlightsForDate(date);
        return `Daily operations report for ${date.toDateString()}: Total flights - ${flightsOnDate.length}`;
    }
}



// Additional class for FlightDispatcher
export class FlightDispatcher extends Person {
    // Method to view weather updates for different airport destinations
    viewWeatherUpdates(destinations: Airport[]): string[] {
        const weatherUpdates: string[] = [];
        destinations.forEach(airport => {
            const update = `Weather update for ${airport.getName()}: Mostly sunny`; // Simplified mock update
            weatherUpdates.push(update);
        });
        return weatherUpdates;
    }
}


// Additional class for MarketingAnalyst
export class MarketingAnalyst extends Person {
    private airline: Airline;

    constructor(id: string, name: string, email: string, phone: string, airline: Airline) {
        super(id, name, email, phone);
        this.airline = airline;
    }

    // Method to analyze booking patterns and develop targeted promotions
    analyzeBookingPatterns(): string {
        // Simple mocked analysis
        return "Analysis of booking patterns: High demand on weekends. Targeted promotions for mid-week flights recommended.";
    }
}
