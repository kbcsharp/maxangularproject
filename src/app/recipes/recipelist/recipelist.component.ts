import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipelist",
  templateUrl: "./recipelist.component.html",
  styleUrls: ["./recipelist.component.scss"]
})
export class RecipelistComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
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

  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
