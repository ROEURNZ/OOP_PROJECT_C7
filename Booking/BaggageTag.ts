import { Baggage } from "./Baggage";

export class BaggageTag {
    private baggage: Baggage;

    constructor(baggage: Baggage) {
        this.baggage = baggage;
    }

    getBaggage(): Baggage {
        return this.baggage;
    }
}
