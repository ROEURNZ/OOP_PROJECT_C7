import { FlightInstance } from "./FlightInstance";

export enum EmployeeType {
    Pilot,
    CoPilot,
    FlightAttendant,
    Mechanic,
    Dispatcher,
    GroundCrew
}
<<<<<<< HEAD
=======


>>>>>>> 50c58f635990b02e7020ce6705450f2c8816fc19
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