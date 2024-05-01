import { Flight } from './Flight';
import { Aircraft } from './Aircraft';
import { Meal } from '../Meal/Meal';
import { Employee } from '../Employee/Employee';

export enum FlightStatus {
    Active,
    Scheduled,
    Delayed,
    Departed,
    Landed,
    InAir,
    Arrived,
    Canceled,
    Diverted,
    Unknown,
    OnTime
}

export class Schedule {
    private date: Date;
    private departureTime: Date;
    private flightInstance: FlightInstance;

    constructor(date: Date, departureTime: Date, flightInstance: FlightInstance) {
        this.date = date;
        this.departureTime = departureTime;
        this.flightInstance = flightInstance;
    }

    getDate(): Date {
        return this.date;
    }

    getDepartureTime(): Date {
        return this.departureTime;
    }

    getFlightInstance(): FlightInstance {
        return this.flightInstance;
    }
}

export class FlightInstance {
    private date: Date;
    private departureTime: Date;
    private arrivalTime: Date;
    private aircraft: Aircraft;
    private flight: Flight;
    private status: FlightStatus;
    private employees: Employee[];
    private schedules: Schedule[];
    private meals: Meal[];

    constructor(date: Date, departureTime: Date, arrivalTime: Date, aircraft: Aircraft, flight: Flight, status: FlightStatus, employees: Employee[] = [], schedules: Schedule[] = [], meals: Meal[] = []) {
        this.date = date;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
        this.aircraft = aircraft;
        this.flight = flight;
        this.status = status;
        this.employees = employees;
        this.schedules = schedules;
        this.meals = meals;
    }

    addEmployee(employee: Employee) {
        this.employees.push(employee);
    }

    addSchedule(schedule: Schedule) {
        this.schedules.push(schedule);
    }

    addMeal(meal: Meal) {
        this.meals.push(meal);
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

    getAircraft(): Aircraft {
        return this.aircraft;
    }

    getFlight(): Flight {
        return this.flight;
    }

    getStatus(): FlightStatus {
        return this.status;
    }

    getEmployees(): Employee[] {
        return this.employees;
    }

    getSchedules(): Schedule[] {
        return this.schedules;
    }

    getMeals(): Meal[] {
        return this.meals;
    }
}