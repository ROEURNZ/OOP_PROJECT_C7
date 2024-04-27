import { Aircraft } from "./Aircraft";

export class Registration {
    private aircraft: Aircraft;

    constructor(aircraft: Aircraft) {
        this.aircraft = aircraft;
    }

    getAircraft(): Aircraft {
        return this.aircraft;
    }
}