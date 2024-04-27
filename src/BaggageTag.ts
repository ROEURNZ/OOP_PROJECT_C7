import { Baggage } from "./Baggage";

export class BaggageTag {
    static forEach(arg0: (baggageTag: any) => void) {
        throw new Error('Method not implemented.');
    }
    private baggage: Baggage;

    constructor(baggage: Baggage) {
        this.baggage = baggage;
    }

    getBaggage(): Baggage {
        return this.baggage;
    }
}
