import { Injectable, EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppinglistService } from "../shoppinglist/shoppinglist.service";

@Injectable({
  providedIn: "root"
})
export class RecipesService {
  constructor(private shoppingListService: ShoppinglistService) {}

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Test Recipe #1",
      "This is a test recipe",
      "https://cdn.pixabay.com/photo/2018/07/04/19/51/roasted-chickpeas-3516806_960_720.jpg",
      [new Ingredient("Meat", 1), new Ingredient("French Fries", 2)]
    ),
    new Recipe(
      "Test Recipe #2",
      "This is a test recipe",
      "https://cdn.pixabay.com/photo/2018/07/04/19/51/roasted-chickpeas-3516806_960_720.jpg",
      [new Ingredient("Buns", 2), new Ingredient("Meat", 1)]
    )
  ];

  getRecipes() {
    return [...this.recipes];
  }

  addIngsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
