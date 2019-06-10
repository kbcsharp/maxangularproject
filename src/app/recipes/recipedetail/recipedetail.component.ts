import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipedetail",
  templateUrl: "./recipedetail.component.html",
  styleUrls: ["./recipedetail.component.scss"]
})
export class RecipedetailComponent implements OnInit {
  @Input() recipe: Recipe;
  shouldShow: boolean = false;

  constructor() {}

  ngOnInit() {}

  dropdownShow() {
    this.shouldShow = !this.shouldShow;
  }
}
