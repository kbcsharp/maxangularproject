import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipesService } from "../recipes.service";

@Component({
  selector: "app-recipedetail",
  templateUrl: "./recipedetail.component.html",
  styleUrls: ["./recipedetail.component.scss"]
})
export class RecipedetailComponent implements OnInit {
  @Input() recipe: Recipe;
  shouldShow: boolean = false;

  constructor(private recipesService: RecipesService) {}

  ngOnInit() {}

  dropdownShow() {
    this.shouldShow = !this.shouldShow;
  }

  onAddToShoppingList() {
    this.recipesService.addIngsToShoppingList(this.recipe.ingredients);
  }
}
