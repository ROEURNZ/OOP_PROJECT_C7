
import { ClassType, CrewMember, FlightStatus } from "./Enumerations";

export function describeClass(classType: CrewMember): string {
    return `This crew member is a ${classType}.`;
}

function describeMeal(mealType: CrewMember): string {
    return `This crew member is a ${mealType}.`;
}


function describeCrewMember(role: CrewMember): string {
    return `This crew member is a ${role}.`;
}

function describeFlightStatus(status: FlightStatus): string {
    return `The flight is currently ${status}.`;
}