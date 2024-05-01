
import { MealType } from "../Utilities/Enumerations";

export class Meal {
    private mealType: MealType;
    private quantity: number;

    constructor(mealType: MealType, quantity: number) {
        this.mealType = mealType;
        this.quantity = quantity;
    }

    getMealType(): MealType {
        return this.mealType;
    }

    getQuantity(): number {
        return this.quantity;
    }
}

