import { Aircraft } from './Airport/Aircraft';
import { Airport } from './Airport/Airport';
import { Airline } from './Airport/Airline';
import { Passenger } from './Person/passenger';
import { Flight } from './Airport/Flight';
import { FlightStatus, FlightInstance } from './Airport/FlightInstance';
import { MealType, ClassType , Ticket } from "./Booking/Ticket";
import { Baggage } from "./Booking/Baggage";
import { BaggageTag } from "./Booking/BaggageTag";
import { Crew } from "./Employee/Crew";
import { Meal } from "./Meal/Meal";
import { Registration } from "./Airport/Registration";
import { Leg } from "./Airport/Leg";
import { BoardingPass } from "./Booking/BoardingPass";
import { Gate } from "./Airport/Gate";
import { Booking} from "./Booking/Booking";
import { Employee, EmployeeType } from "./Employee/Employee";
import { Schedule } from "./Booking/Schedule";
import { AirportController } from './Controller/AirportController';

//================================================== Crew =======================================================
let Narith = new Crew ("N10","Narith","bunnarith@gmail.com","086 936 150","Your PD",1000);

//================================================== Aircraft ====================================================
let BMW = new Aircraft ("109BT","BMW",109)

//================================================== Passenger ===================================================

let Votey = new Passenger ("1","Votey","votey@gmail.com","123456789",MealType.Standard, "FF123", "BRN001",false);
//================================================== Flight =====================================================

const flight = new Flight('FL001', new Date(), new Date(), new Date(), FlightStatus.OnTime, new Airline("PNH","BNR10","Phnom Penh"));



const airportController = new AirportController([flight]);

// Get passenger details by booking reference
const passengers = airportController.getPassengerDetailsByBookingReference("ABC123");
console.log("Passenger Details:");
passengers.forEach((passenger: Passenger) => {
  console.log(`Name: ${passenger.name}, Has Return Ticket: ${passenger.hasReturnTicket}`);
});

flight.addCrew(Narith);
flight.addAircraft(BMW);
flight.addPassenger(Votey)

// console.log(flight);
