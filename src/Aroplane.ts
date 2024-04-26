export class Aroplane {
    private regiStrationNumber: string;
    private model: string;
    private capacity: number;

    constructor(regiStrationNumber: string, model: string, capacity: number) {
        this.regiStrationNumber = regiStrationNumber;
        this.model = model;
        this.capacity = capacity;
    }

    getRegiStrationNumber(): string {
        return this.regiStrationNumber;
    }
    getModel(): string {
        return this.model;
    }
    getCapacity(): number {
        return this.capacity;
    }
    
}