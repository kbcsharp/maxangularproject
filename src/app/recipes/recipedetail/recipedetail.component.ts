import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipesService } from "../recipes.service";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-recipedetail",
  templateUrl: "./recipedetail.component.html",
  styleUrls: ["./recipedetail.component.scss"]
})
export class RecipedetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  shouldShow: boolean = false;

  constructor(
    private recipesService: RecipesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.recipe = this.recipesService.getRecipe(this.id);
    });
  }

  dropdownShow() {
    this.shouldShow = !this.shouldShow;
  }

  onAddToShoppingList() {
    this.recipesService.addIngsToShoppingList(this.recipe.ingredients);
  }
}
