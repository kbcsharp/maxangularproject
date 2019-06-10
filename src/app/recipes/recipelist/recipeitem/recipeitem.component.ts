import { Component, OnInit, Input, Output } from "@angular/core";
import { Recipe } from "../../recipe.model";
import { RecipesService } from "../../recipes.service";

@Component({
  selector: "app-recipeitem",
  templateUrl: "./recipeitem.component.html",
  styleUrls: ["./recipeitem.component.scss"]
})
export class RecipeitemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipesService: RecipesService) {}

  ngOnInit() {}

  onSelected() {
    this.recipesService.recipeSelected.emit(this.recipe);
  }
}
