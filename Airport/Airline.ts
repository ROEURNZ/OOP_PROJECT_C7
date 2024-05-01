import { Crew } from "../Employee/Crew";
import { Flight } from "./Flight";
import { Passenger } from "../Person/Passenger";
import { ClassType } from "../Utilities/Enumerations";

export class Airline {
    private name: string;
    private code: string;
    private location: string;
    private employees: Crew[];
    private flights: Flight[];

    constructor(
        name: string,
        code: string,
        location: string,
        employees: Crew[],
        flights: Flight[]
    ) {
        this.name = name;
        this.code = code;
        this.location = location;
        this.employees = employees;
        this.flights = flights;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getCode(): string {
        return this.code;
    }

    setCode(code: string): void {
        this.code = code;
    }

    getLocation(): string {
        return this.location;
    }

    setLocation(location: string): void {
        this.location = location;
    }

    getEmployees(): Crew[] {
        return this.employees;
    }

    setEmployees(employees: Crew[]): void {
        this.employees = employees;
    }

    addEmployee(employee: Crew): void {
        this.employees.push(employee);
    }

    removeEmployee(id: string): void {
        this.employees = this.employees.filter(employee => employee.getID() !== id);
    }

    getFlights(): Flight[] {
        return this.flights;
    }

    setFlights(flights: Flight[]): void {
        this.flights = flights;
    }

    addFlight(flight: Flight): void {
        this.flights.push(flight);
    }

    removeFlight(flightNumber: string): void {
        this.flights = this.flights.filter(flight => flight.getFlightNumber() !== flightNumber);
    }


    // Inside the Airline class definition
    getPassengerDetailsByBookingRef(bookingRef: string): Passenger | null {
        for (const flight of this.flights) {
            for (const ticket of flight.getTickets()) {
                if (ticket.getPassenger().getBookingReferenceNumber() === bookingRef) {
                    return ticket.getPassenger();
                }
            }
        }
        return null; // If booking reference not found
    }


    // Inside the Airline class definition
    getFlightsForDate(date: Date): Flight[] {
        return this.flights.filter(flight => flight.getDate().toDateString() === date.toDateString());
    }


    // Method to get count of passengers with return tickets for a flight (//!User Story 2)

    getReturnTicketPassengersCount(flightNumber: string): number {
        const flight = this.flights.find(flight => flight.getFlightNumber() === flightNumber);
        if (flight) {
            return flight.getTickets().filter(ticket => ticket.getClassType() === ClassType.Economy).length;
        } else {
            console.log('Flight not found with flight number:', flightNumber);
            return 0;
        }
    }

    // Method to calculate total salary paid to all employees (//!User Story 5)

    getTotalSalaryPaid(): number {
        return this.employees.reduce((total, employee) => total + employee.getSalary(), 0);
    }

    
    // Method to get count of flights a pilot has to join on a given date (//! User Story 3)
    getFlightsForPilot(pilotId: string, date: Date): number {
        return this.flights.filter(flight => flight.getCrew().some(crew => crew.getID() === pilotId) && flight.getDate().toDateString() === date.toDateString()).length;
    }

    // Method to get count of each meal type required for a particular flight (//! User Story 4)
    getMealRequirementsForFlight(flightNumber: string): { [mealType: string]: number } {
        const flight = this.flights.find(flight => flight.getFlightNumber() === flightNumber);
        if (flight) {
            const tickets = flight.getTickets();
            const mealRequirements: { [mealType: string]: number } = {};
            tickets.forEach(ticket => {
                const mealType = ticket.getMealType(); // Access enum value directly
                mealRequirements[mealType] = (mealRequirements[mealType] || 0) + 1;
            });
            return mealRequirements;
        } else {
            console.log('Flight not found with flight number:', flightNumber);
            return {};
        }
    }


    // Method to get gate number for a given flight (//! User Story 6)

    getGateNumberForFlight(flightNumber: string): number | null {
        const flight = this.flights.find(flight => flight.getFlightNumber() === flightNumber);
        if (flight) {
            // Assuming you have a method to get the gate number for the flight
            return flight.getGateNumber();
        } else {
            console.log('Flight not found with flight number:', flightNumber);
            return null;
        }
    }
}