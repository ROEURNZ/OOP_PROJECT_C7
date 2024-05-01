
import { FlightInstance } from "../Airport/FlightInstance";

export class Schedule {
    private scheduleID: string;
    private flight: Flight;
    private departureTime: Date;
    private arrivalTime: Date;
    private gate: Gate;

    constructor(scheduleID: string, flight: Flight, departureTime: Date, arrivalTime: Date, gate: Gate) {
        this.scheduleID = scheduleID;
        this.flight = flight;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
        this.gate = gate;
    }

    getScheduleID(): string {
        return this.scheduleID;
    }

    getFlight(): Flight {
        return this.flight;
    }

    getDepartureTime(): Date {
        return this.departureTime;
    }

    getArrivalTime(): Date {
        return this.arrivalTime;
    }

    getGate(): Gate {
        return this.gate;
    }
}
