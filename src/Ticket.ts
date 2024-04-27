import { Passenger } from './Passenger';
import { Flight } from './Flight';
import { FlightInstance } from './FlightInstance';
import { Aircraft } from './Aircraft';
import { Meal } from './Meal';
import { Employee } from './Employee';
        
export enum ClassType {
    Economy,
    Business,
    First,
    Classical
}

export enum MealType {
    Standard,
    Vegetarian,
    Vegan,
    GlutenFree
}


export class Ticket {
    private fareBasis: string;
    private classType: ClassType;
    private seatNumber: string;
    private mealType: MealType;
    private passenger: Passenger;
    private flightInstance: FlightInstance;

    constructor(fareBasis: string, classType: ClassType, seatNumber: string, mealType: MealType, passenger: Passenger, flightInstance: FlightInstance) {
        this.fareBasis = fareBasis;
        this.classType = classType;
        this.seatNumber = seatNumber;
        this.mealType = mealType;
        this.passenger = passenger;
        this.flightInstance = flightInstance;
    }

    getFareBasis(): string {
        return this.fareBasis;
    }

    getClassType(): ClassType {
        return this.classType;
    }

    getSeatNumber(): string {
        return this.seatNumber;
    }

    getMealType(): MealType {
        return this.mealType;
    }

    getPassenger(): Passenger {
        return this.passenger;
    }

    getFlightInstance(): FlightInstance {
        return this.flightInstance;
    }
}