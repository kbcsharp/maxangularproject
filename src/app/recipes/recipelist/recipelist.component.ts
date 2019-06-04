import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipelist",
  templateUrl: "./recipelist.component.html",
  styleUrls: ["./recipelist.component.scss"]
})
export class RecipelistComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "Test Recipe",
      "This is a test recipe",
      "https://cdn.pixabay.com/photo/2018/07/04/19/51/roasted-chickpeas-3516806_960_720.jpg"
    ),
    new Recipe(
      "Test Recipe",
      "This is a test recipe",
      "https://cdn.pixabay.com/photo/2018/07/04/19/51/roasted-chickpeas-3516806_960_720.jpg"
    )
  ];

  constructor() {}

  ngOnInit() {}
}
