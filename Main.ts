import { MealType, CrewMember, FlightStatus, ClassType } from "./Utilities/Enumerations";
import { Flight } from "./Airport/Flight";
import { Airline } from "./Airport/Airline";
import { Airport } from "./Airport/Airport";

import { Aircraft } from "./Airport/Aircraft";
import { Accountant, ComplianceOfficer, Crew, FoodSupplyManager, ITSpecialist, LoungeStaff, LoyaltyProgramManager, NotificationService, SeatSelector } from "./Employee/Crew";
import { Passenger } from "./Person/Passenger";
import { Baggage, BaggageTracker } from "./Booking/Baggage";
import { CustomerServiceRepresentative, FlightDispatcher, MaintenanceCrewMember, MarketingAnalyst, OperationsManager, SecurityOfficer } from "./Employee/AirlineController";


// Creating passengers
const passengers = [
    new Passenger("PA001", "Bunnarith Phoeurn", "bunnarith.phoeurn@student.passerellesnumeriques.org", "086936150", MealType.Standard, "FF001", "BRN001", true),
    new Passenger("PA002", "Votey Chhoeurn", "chhoeurn.votey@student.passerellesnumeriques.org", "0123456789", MealType.Vegetarian, "FF002", "BRN002", true),
    new Passenger("PA003", "Ryfin Sok", "ryfin.sok@student.passerellesnumeriques.org", "1234567890", MealType.Standard, "FF003", "BRN003", false),
    new Passenger("PA004", "Dara Rith", "dara.rith@student.passerellesnumeriques.org", "0987654321", MealType.Vegan, "FF004", "BRN004", false),
    new Passenger("PA005", "Roeurn KAKI", "roeurn.kaki@student.passerellesnumeriques.org", "0987654321", MealType.Vegetarian, "FF005", "BRN004", true)
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
        'FF001',
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
        'FF002',
        new Date('2024-05-02T00:00:00'),
        new Date('2024-05-02T03:00:00'),
        new Date('2024-05-02T05:00:00'),
        FlightStatus.Scheduled,
        crews,
        [],
        102,
        aircraft1,
        airline1
    ),
    new Flight(
        'FF003',
        new Date('2024-05-02T00:00:00'),
        new Date('2024-05-02T03:00:00'),
        new Date('2024-05-02T05:00:00'),
        FlightStatus.Scheduled,
        crews,
        [],
        103,
        aircraft1,
        airline1
    )
]




// Adding flights to the airline
flights.forEach(flight => airline1.addFlight(flight));

// Adding passengers to flights with seat class and seat number
flights[0].addPassenger(passengers[0], ClassType.Economy, "10A");
flights[0].addPassenger(passengers[2], ClassType.Economy, "10A");
flights[1].addPassenger(passengers[3], ClassType.Business, "11B");
flights[1].addPassenger(passengers[1], ClassType.Economy, "12C");
flights[0].addPassenger(passengers[0], ClassType.Business, "12C");



// Test User Stories
console.log('\n=== User Story Test Cases ===\n');

//! Test User Story 1: Retrieve passenger details by booking reference number for additional passengers
const passengerDetails1 = airline1.getPassengerDetailsByBookingRef('BRN001');
console.log('User Story 1 - Passenger Details by Booking Reference BRN001:');
console.log(passengerDetails1);

const passengerDetails2 = airline1.getPassengerDetailsByBookingRef('BRN002');
console.log('User Story 1 - Passenger Details by Booking Reference BRN002:');
console.log(passengerDetails2);

const passengerDetails3 = airline1.getPassengerDetailsByBookingRef('BRN003');
console.log('User Story 1 - Passenger Details by Booking Reference');
console.log(passengerDetails3);

const passengerDetails4 = airline1.getPassengerDetailsByBookingRef('BRN004');
console.log(passengerDetails4);


//? Test User Story 2: Count return tickets for Flight
// Counting passengers with return tickets
console.log('User Story 2 - Count return tickets for Flight');

let passengersWithReturnTicketCount = 0;
passengers.forEach(passenger => {
    if (passenger.hasReturnTicket === "return") {
        passengersWithReturnTicketCount++;
    }
});

console.log('\nNumber of passengers with return tickets:', passengersWithReturnTicketCount);


//? Test User Story 3: Count flights for a given date

const dateToCheck = new Date('2024-05-01');
const dateToCheck2 = new Date('2024-05-02');
const flightsForDate = airline1.getFlightsForDate(dateToCheck);
const flightsForDate2 = airline1.getFlightsForDate(dateToCheck2);
console.log(`\nUser Story 3 - Flights Count for Date ${dateToCheck.toDateString()}:`, flightsForDate.length);
console.log(`\nUser Story 3 - Flights Count for Date ${dateToCheck2.toDateString()}:`, flightsForDate2.length);





//? Test User Story 4: Count meal types for Flight FF002
const mealRequirements2 = airline1.getMealRequirementsForFlight('FF002');
console.log('\nUser Story 4 - Meal Requirements for Flight FF002:', mealRequirements2);



//? Test User Story 5: Calculate total salary paid to all employees
const totalSalaryPaid = airline1.getTotalSalaryPaid();
console.log('\nUser Story 5 - Total Salary Paid to All Employees:', totalSalaryPaid);



//? Test User Story 6: Retrieve gate number for Flight FF002
const gateNumber2 = airline1.getGateNumberForFlight('FF002');
console.log('\nUser Story 6 - Gate Number for Flight FF002:', gateNumber2);




//! Additional User Stories Tests

// Test User Story 7: Track baggage status for a passenger
const baggageTracker = new BaggageTracker();
const baggage1 = new Baggage(20, passengers[2], flights[0]); // Baggage for Ryfin Sok on Flight F001
baggageTracker.addBaggage(baggage1);
const trackedBaggage = baggageTracker.trackBaggage(passengers[2]);
console.log('\nUser Story 7 - Baggage Status for Ryfin Sok:');
console.log(trackedBaggage);

// Test User Story 8: Get list of passengers on a specific flight for security checks
const securityOfficer = new SecurityOfficer('SO001', 'John Smith', 'john.smith@example.com', '+123456789', airline1);
const passengersOnFlight2 = securityOfficer.getPassengersOnFlight(flights[1]);
console.log('\nUser Story 8 - Passengers on Flight F002 for Security Checks:');
console.log(passengersOnFlight2);

// Test User Story 9: View and update seating assignments for passengers
const customerServiceRep = new CustomerServiceRepresentative('CSR001', 'Alice Johnson', 'alice.johnson@example.com', '+987654321', airline1);
customerServiceRep.updateSeatingAssignments(passengers[1], '22A'); // Update Votey Chhoeurn's seat assignment
console.log('\nUser Story 9 - Seating Assignment Updated for Votey Chhoeurn: Seat 22A');

// Test User Story 10: Access maintenance schedule of an airplane
const maintenanceCrewMember = new MaintenanceCrewMember('MC001', 'David Brown', 'david.brown@example.com', '+123456789');
const maintenanceSchedule = maintenanceCrewMember.getMaintenanceSchedule(aircraft1);
console.log('\nUser Story 10 - Maintenance Schedule for Aircraft A001:');
console.log(maintenanceSchedule);

// Test User Story 11: View daily flight operations reports
const operationsManager = new OperationsManager('OM001', 'Emily White', 'emily.white@example.com', '+987654321', airline1);
const dailyReport = operationsManager.viewDailyOperationsReport(new Date('2024-05-01'));
console.log('\nUser Story 11 - Daily Operations Report for 2024-05-01:');
console.log(dailyReport);

// Test User Story 12: View weather updates for different airport destinations
const flightDispatcher = new FlightDispatcher('FD001', 'Michael Green', 'michael.green@example.com', '+123456789');
const weatherUpdates = flightDispatcher.viewWeatherUpdates([new Airport("Airport Code", "Airport Name")]);
console.log('\nUser Story 12 - Weather Updates for Phnom Penh International Airport:');
console.log(weatherUpdates);

// Test User Story 13: Analyze booking patterns to develop targeted promotions and offers
const marketingAnalyst = new MarketingAnalyst('MA001', 'Sophia Miller', 'sophia.miller@example.com', '+987654321', airline1);
const analysisResult = marketingAnalyst.analyzeBookingPatterns();
console.log('\nUser Story 13 - Analysis of Booking Patterns and Targeted Promotions:');
console.log(analysisResult);

// Test User Story 14: Receive notifications about flight updates
const notificationService = new NotificationService();
notificationService.sendFlightNotification(passengers[0], 'Flight F001 delayed by 1 hour'); // Send notification to Bunnarith Phoeurn
console.log('\nUser Story 14 - Notification Sent to Bunnarith Phoeurn: Flight F001 delayed by 1 hour');

// Test User Story 15: Access passenger flight history to award frequent flyer points
const loyaltyProgramManager = new LoyaltyProgramManager();
loyaltyProgramManager.awardFrequentFlyerPoints(passengers[0]); // Award frequent flyer points to Bunnarith Phoeurn
console.log('\nUser Story 15 - Frequent Flyer Points Awarded to Bunnarith Phoeurn');

// Test User Story 16: Generate financial reports including revenue, costs, and profit margins
const accountant = new Accountant();
const financialReport = accountant.generateFinancialReport(airline1, new Date('2024-05-01'), new Date('2024-05-02'));
console.log('\nUser Story 16 - Financial Report for Phnom Penh Airlines:');
console.log(financialReport);

// Test User Story 17: Ensure compliance with international security standards
const itSpecialist = new ITSpecialist();
const securityComplianceStatus = itSpecialist.ensureSecurityCompliance();
console.log('\nUser Story 17 - Security Compliance Status:');
console.log(securityComplianceStatus);

// Test User Story 18: Track fuel usage and emissions data for flights
const complianceOfficer = new ComplianceOfficer();
const fuelEmissionsData = complianceOfficer.trackFuelUsageAndEmissions();
console.log('\nUser Story 18 - Fuel Usage and Emissions Data Tracked:');
console.log(fuelEmissionsData);

// Test User Story 19: Manage inventory of food supplies for flights
const foodSupplyManager = new FoodSupplyManager();
const foodInventoryStatus = foodSupplyManager.manageFoodInventory();
console.log('\nUser Story 19 - Food Inventory Management Status:');
console.log(foodInventoryStatus);

// Test User Story 20: Allow passengers to choose their seats when booking a flight
const seatSelector = new SeatSelector();
seatSelector.chooseSeat(passengers[0], '10F'); // Bunnarith Phoeurn chooses seat 10F
console.log('\nUser Story 20 - Seat Selection: Seat 10F chosen by Bunnarith Phoeurn');

// Test User Story 21: Verify eligibility of passengers entering the lounge
const loungeStaff = new LoungeStaff();
const isPassengerEligible = loungeStaff.verifyPassengerEligibility(passengers[0]); // Assume Bunnarith Phoeurn is eligible
console.log('\nUser Story 21 - Passenger Eligibility Verification for Bunnarith Phoeurn:', isPassengerEligible);
