import { Injectable, EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable({
  providedIn: "root"
})
export class ShoppinglistService {
  ingredientsCreated = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Potato", 1)
  ];

  getIngredients() {
    return [...this.ingredients];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsCreated.emit([...this.ingredients]);
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsCreated.emit([...this.ingredients]);
  }
}
