import { FlightInstance, FlightStatus } from './FlightInstance';
import { Airline } from './Airline';
import { Passenger } from '../Person/passenger';
import { Crew } from '../Employee/Crew';
import { Aircraft } from './Aircraft';


export class Flight {
    private flightNumber: string;
    private date : Date;
    private departureTime : Date;
    private arrivalTime : Date;
    private status : FlightStatus;
    private crew : Crew[];
    private aircraft : Aircraft[];
    private airline: Airline;
    passengers: Passenger[];

    constructor(flightNumber: string,date:Date, departureTime: Date, arrivalTime: Date,status:FlightStatus, airline: Airline) {
        this.flightNumber = flightNumber;
        this.date = date;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
        this.status = status;
        this.crew = [];
        this.airline = airline;
        this.aircraft = [];
        this.passengers = [];

    }

    addCrew(crew:Crew){
        this.crew.push(crew);
    }
    
    addAircraft(aircraft: Aircraft){
        this.aircraft.push(aircraft);
    }

    addPassenger(passenger: Passenger){
        this.passengers.push(passenger);
    };
    
    getFlightNumber(): string {
        return this.flightNumber;
    }
    
    getDate(): Date {
        return this.date;
    }
    
    getDepartureTime(): Date {
        return this.departureTime;
    }
    
    getArrivalTime(): Date {
        return this.arrivalTime;
    }
    
    getStatus(): FlightStatus {
        return this.status;
    }
    
    getCrew(): Crew[] {
        return this.crew;
    }
    
    getAircraft(): Aircraft[] {
        return this.aircraft;
    }

    getAirline(): Airline {
        return this.airline;
    }
    
    getPassenger(): Passenger[] {
        return this.passengers;
    }

  
}