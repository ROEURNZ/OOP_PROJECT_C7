import { MealType, CrewMember, FlightStatus } from "./Utilities/Enumerations";
// import { Passenger } from "./Person/Passenger";
import { Flight } from "./Airport/Flight";
import { Airline } from "./Airport/Airline";

import { Aircraft } from "./Airport/Aircraft";
import { Crew } from "./Employee/Crew";
import { Passenger } from "./Person/Passenger";


// Creating passengers
const passengers = [
    new Passenger("PA001", "Bunnarith Phoeurn", "bunnarith.phoeurn@student.passerellesnumeriques.org", "086936150", MealType.Standard, "FF001", "BRN001", false),
    new Passenger("PA002", "Votey Chhoeurn", "chhoeurn.votey@student.passerellesnumeriques.org", "0123456789", MealType.Vegetarian, "FF002", "BRN002", true),
    new Passenger("PA003", "Ryfin Sok", "ryfin.sok@student.passerellesnumeriques.org", "1234567890", MealType.Standard, "FF003", "BRN003", false),
    new Passenger("PA004", "Dara Rith", "dara.rith@student.passerellesnumeriques.org", "0987654321", MealType.Vegan, "FF004", "BRN004", false),
    new Passenger("PA005", "Roeurn KAKI", "roeurn.kaki@student.passerellesnumeriques.org", "0987654321", MealType.Vegetarian, "FF004", "BRN004", true)
];


// Create instances of Crew, Aircraft, and Airline
const crews = [
    new Crew('C001', 'Captain Smith', 'captain@student.passerellesnumeriques.org', '+987654321', CrewMember.Pilot, 10000),
    new Crew('C002', 'Sara Johnson', 'sara@student.passerellesnumeriques.org', '+123456789', CrewMember.FlightAttendant, 5000),
    new Crew('C003', 'Top Notch', 'top.notch@student.passerellesnumeriques.org', '+123456789', CrewMember.Dispatcher, 25000)
]

const aircraft1 = new Aircraft('A001', 'Boeing 737', 180);
const airline1 = new Airline('Phnom Penh Airlines', 'EXA', 'Phnom Penh City', crews, []);

// Creating flights with defined aircraft and airline
const flights = [
    new Flight(
        'F001',
        new Date('2024-05-01T00:00:00'),
        new Date('2024-05-01T01:00:00'),
        new Date('2024-05-01T03:00:00'),
        FlightStatus.Scheduled,
        crews,
        [],
        101,
        aircraft1,
        airline1
    ),
    new Flight(
        'F002',
        new Date('2024-05-02T00:00:00'),
        new Date('2024-05-02T03:00:00'),
        new Date('2024-05-02T05:00:00'),
        FlightStatus.Scheduled,
        [crews[1]],
        [],
        102,
        aircraft1,
        airline1
    )
]

// Adding flights to the airline
flights.forEach(flight => airline1.addFlight(flight));

// Adding passengers to flights
flights[0].addPassenger(passengers[2]); // Adding John Doe to Flight F001
flights[1].addPassenger(passengers[3]); // Adding Jane Smith to Flight F002
flights[1].addPassenger(passengers[1]); // Adding Jane Smith to Flight F002


// Test User Stories
console.log('\n=== User Story Test Cases ===\n');

// Test User Story 1: Retrieve passenger details by booking reference number for additional passengers
const passengerDetails3 = airline1.getPassengerDetailsByBookingRef('BRN003');
console.log('User Story 1 - Passenger Details by Booking Reference BRN003:');
console.log(passengerDetails3);

const passengerDetails4 = airline1.getPassengerDetailsByBookingRef('BRN004');
// console.log('\nUser Story 1 - Passenger Details by Booking Reference BRN004:');
console.log(passengerDetails4);

const passengerDetails1 = airline1.getPassengerDetailsByBookingRef('BRN001');
console.log(passengerDetails1);

// Test User Story 2: Count return tickets for Flight F002
const returnTicketsCount2 = airline1.getReturnTicketPassengersCount('F002');
console.log('\nUser Story 2 - Return Tickets Count for Flight F002:', returnTicketsCount2);

// Test User Story 3: Count flights for a given date
const dateToCheck = new Date('2024-05-01');
const flightsForDate = airline1.getFlightsForDate(dateToCheck);
console.log('\nUser Story 3 - Flights Count for Date ${dateToCheck.toDateString()}:', flightsForDate.length);

// Test User Story 4: Count meal types for Flight F002
const mealRequirements2 = airline1.getMealRequirementsForFlight('F002');
console.log('\nUser Story 4 - Meal Requirements for Flight F002:', mealRequirements2);

// Test User Story 5: Calculate total salary paid to all employees
const totalSalaryPaid = airline1.getTotalSalaryPaid();
console.log('\nUser Story 5 - Total Salary Paid to All Employees:', totalSalaryPaid);

// Test User Story 6: Retrieve gate number for Flight F002
const gateNumber2 = airline1.getGateNumberForFlight('F002');
console.log('\nUser Story 6 - Gate Number for Flight F002:', gateNumber2);

