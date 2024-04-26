import { FlightInstance } from "./FlightInstance";

export enum EmployeeType {
    Pilot,
    CoPilot,
    FlightAttendant,
    Mechanic,
    Dispatcher,
    GroundCrew
}
export class Employee {
    private type: EmployeeType;
    private flightInstances: FlightInstance[];

    constructor(type: EmployeeType) {
        this.type = type;
        this.flightInstances = [];
    }

    addFlightInstance(instance: FlightInstance) {
        this.flightInstances.push(instance);
    }

    getType(): EmployeeType {
        return this.type;
    }

    getFlightInstances(): FlightInstance[] {
        return this.flightInstances;
    }
}