import { Flight } from "../Airport/Flight";
import { Passenger } from "../Person/passenger";

export class AirportController {
    flights: Flight[];
  
    constructor(flights: Flight[]) {
      this.flights = flights;
    }
  
    getPassengerDetailsByBookingReference(bookingReference: string) {
      const passengers: Passenger[] = [];
      this.flights.forEach((flight: Flight) => {
        flight.passengers.forEach((passenger: Passenger) => {
          passengers.push(passenger);
        });
      });
      return passengers;
    }
  }