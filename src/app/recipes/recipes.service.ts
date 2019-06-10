import { Injectable, EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

@Injectable({
  providedIn: "root"
})
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Test Recipe #1",
      "This is a test recipe",
      "https://cdn.pixabay.com/photo/2018/07/04/19/51/roasted-chickpeas-3516806_960_720.jpg"
    ),
    new Recipe(
      "Test Recipe #2",
      "This is a test recipe",
      "https://cdn.pixabay.com/photo/2018/07/04/19/51/roasted-chickpeas-3516806_960_720.jpg"
    )
  ];

  getRecipes() {
    return [...this.recipes];
  }
}
