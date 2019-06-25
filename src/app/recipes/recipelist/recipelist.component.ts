import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipesService } from "../recipes.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-recipelist",
  templateUrl: "./recipelist.component.html",
  styleUrls: ["./recipelist.component.scss"]
})
export class RecipelistComponent implements OnInit {
  recipes: Recipe[];

  constructor(
    private recipesService: RecipesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(["new"], { relativeTo: this.route });
  }
}
