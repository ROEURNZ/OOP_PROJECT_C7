import { Aircraft } from './Aircraft';
import { Airport } from './Airport';
import { Airline } from './Airline';
import { Passenger } from './Passenger';
import { Flight } from './Flight';
import { FlightStatus, FlightInstance } from './FlightInstance';
import { MealType, ClassType , Ticket } from "./Ticket";
import { Baggage } from "./Baggage";
import { BaggageTag } from "./BaggageTag";
import { Crew } from "./Crew";
import { Meal } from "./Meal";
import { Registration } from "./Registration";
import { Leg } from "./Leg";
import { BoardingPass } from "./BoardingPass";
import { Gate } from "./Gate";
import { Booking} from "./Booking";
import { Employee, EmployeeType} from "./Employee";


// Define airports
const airports: Airport[] = [
    new Airport('Airport 1', 'APT1', 'Address 1', '123-456-7890'),
    new Airport('Airport 2', 'APT2', 'Address 2', '987-654-3210')
];

// Define flights
const flights: Flight[] = [
    new Flight('F001', new Airline('Airline 1', 'AL01', 'Location 1')),
    new Flight('F002', new Airline('Airline 2', 'AL02', 'Location 2'))
];

// Define aircraft
const aircraft: Aircraft[] = [
    new Aircraft('AP001', 'Boeing 737', 200),
    new Aircraft('AP002', 'Airbus A320', 180)
];



// Create instances of objects
const passengers = [
    new Passenger('1', 'John Doe', 'john@example.com', '123456789', MealType.Standard, 'FF123', 'BRN001'),
    new Passenger('2', 'Jane Doe', 'jane@example.com', '987654321', MealType.Vegetarian, 'FF456', 'BRN002')
];

const crew = [
    new Crew('P001', 'Captain Smith', 'captain@example.com', '987654321', 'Captain', 50000),
    new Crew('C001', 'CoPilot Johnson', 'copilot@example.com', '543216789', 'Co-Pilot', 40000)
];

// Define flight instances
const flightInstances: FlightInstance[] = [
    new FlightInstance(new Date(), new Date(), new Date(), aircraft[0], flights[0], FlightStatus.Active),
    new FlightInstance(new Date(), new Date(), new Date(), aircraft[1], flights[1], FlightStatus.Scheduled)
];

const tickets = [
    new Ticket('FB001', ClassType.Economy, 'T001', MealType.Standard, passengers[0], flightInstances[0]),
    new Ticket('FB002', ClassType.Business, 'T002', MealType.Vegetarian, passengers[1], flightInstances[1])
];


const meals = [
    new Meal(MealType.Standard, 1),
    new Meal(MealType.Vegetarian, 2)
];

const legs = [
    new Leg(airports[0], airports[1], flightInstances[0]),
    new Leg(airports[1], airports[0], flightInstances[1])
];

const registrations = [
    new Registration(aircraft[0]),
    new Registration(aircraft[1])
];

const gates = [
    new Gate(airports[0]),
    new Gate(airports[1])
];

const boardingPasses = [
    new BoardingPass(passengers[0], flightInstances[0]),
    new BoardingPass(passengers[1], flightInstances[1])
];

const baggages = [
    new Baggage(passengers[0]),
    new Baggage(passengers[1])
];

const baggageTags = [
    new BaggageTag(baggages[0]),
    new BaggageTag(baggages[1])
];

const bookings = [
    new Booking('B001', 1000),
    new Booking('B002', 1500)
];


// Create instances of Employee
const employees: Employee[] = [
    new Employee(EmployeeType.Pilot),
    new Employee(EmployeeType.FlightAttendant)
];
// Add flight instances to employees
employees[0].addFlightInstance(flightInstances[0]);
employees[1].addFlightInstance(flightInstances[1]);

// Log out information about employees
console.log("Employees:");
employees.forEach(employee => {
    console.log("Employee Type:", employee.getType());
    console.log("Flight Instances:", employee.getFlightInstances().map(instance => instance.getFlight().getFlightNumber()));
    console.log("\n");
});

// Create instances of Schedule
const schedules: Schedule[] = [
    new Schedule(new Date(), new Date(), flightInstances[0]),
    new Schedule(new Date(), new Date(), flightInstances[1])
];

// Log out information about schedules
console.log("Schedules:");



// Log out properties
console.log("Passenger:");
passengers.forEach(passenger => {
    console.log("ID:", passenger.getID());
    console.log("Name:", passenger.getName());
    console.log("Email:", passenger.getEmail());
    console.log("Phone:", passenger.getPhone());
    console.log("Special Meal:", passenger.getSpecialMeal());
    console.log("Frequent Flyer Membership:", passenger.getFrequentFlyerMembership());
    console.log("Booking Reference Number:", passenger.getBookingReferenceNumber());
    console.log("\n");
});

console.log("Crew:");
crew.forEach(member => {
    console.log("ID:", member.getID());
    console.log("Name:", member.getName());
    console.log("Email:", member.getEmail());
    console.log("Phone:", member.getPhone());
    console.log("Position:", member.getPosition());
    console.log("Salary:", member.getSalary());
    console.log("\n");
});

console.log("Aircraft:");
aircraft.forEach(aircraft => {
    console.log("Registration Number:", aircraft.getRegistrationNumber());
    console.log("Model:", aircraft.getModel());
    console.log("Capacity:", aircraft.getCapacity());
    console.log("\n");
});

console.log("Airline:");
flights.forEach(flight => {
    console.log("Name:", flight.getAirline().getName());
    console.log("Code:", flight.getAirline().getCode());
    console.log("Location:", flight.getAirline().getLocation());
    console.log("\n");
});

console.log("Flight:");
flights.forEach(flight => {
    console.log("Flight Number:", flight.getFlightNumber());
    console.log("Airline:", flight.getAirline().getName());
    console.log("\n");
});

console.log("Flight Instance:");
flightInstances.forEach(instance => {
    console.log("Date:", instance.getDate());
    console.log("Departure Time:", instance.getDepartureTime());
    console.log("Arrival Time:", instance.getArrivalTime());
    console.log("Aircraft Registration Number:", instance.getAircraft().getRegistrationNumber());
    console.log("Status:", instance.getStatus());
    console.log("\n");
});

console.log("Ticket:");
tickets.forEach(ticket => {
    console.log("Fare Basis:", ticket.getFareBasis());
    console.log("Class Type:", ticket.getClassType());
    console.log("Seat Number:", ticket.getSeatNumber());
    console.log("Meal Type:", ticket.getMealType());
    console.log("Passenger:", ticket.getPassenger().getName());
    console.log("\n");
});

console.log("Meal:");
meals.forEach(meal => {
    console.log("Meal Type:", meal.getMealType());
    console.log("Quantity:", meal.getQuantity());
    console.log("\n");
});

console.log("Leg:");
legs.forEach(leg => {
    console.log("Departure Airport:", leg.getDepartureAirport().getName());
    console.log("Destination Airport:", leg.getDestinationAirport().getName());
    console.log("\n");
});

console.log("Registration:");
registrations.forEach(registration => {
    console.log("Aircraft Registration Number:", registration.getAircraft().getRegistrationNumber());
    console.log("\n");
});

console.log("Gate:");
gates.forEach(gate => {
    console.log("Airport:", gate.getAirport().getName());
    console.log("\n");
});

console.log("Boarding Pass:");
boardingPasses.forEach(boardingPass => {
    console.log("Passenger:", boardingPass.getPassenger().getName());
    console.log("Flight:", boardingPass.getFlightInstance().getFlight().getFlightNumber());
    console.log("\n");
});

console.log("Baggage:");
baggages.forEach(baggage => {
    console.log("Passenger:", baggage.getPassenger().getName());
    console.log("\n");
});

console.log("Baggage Tag:");
baggageTags.forEach(baggageTag => {
    console.log("Baggage:", baggageTag.getBaggage().getPassenger().getName());
    console.log("\n");
});

console.log("Booking:");
bookings.forEach(booking => {
    console.log("Booking Number:", booking.getBookingNumber());
    console.log("Total Amount:", booking.getTotalAmount());
    console.log("\n");
});

console.log("Airport:");
airports.forEach(airport => {
    console.log("Name:", airport.getName());
    console.log("Code:", airport.getCode());
    console.log("Address:", airport.getAddress());
    console.log("Contact Number:", airport.getContactNumber());
    console.log("\n");
});
