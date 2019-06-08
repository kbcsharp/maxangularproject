import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Component({
  selector: "app-shoppinglist",
  templateUrl: "./shoppinglist.component.html",
  styleUrls: ["./shoppinglist.component.scss"]
})
export class ShoppinglistComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Potato", 1)
  ];

  constructor() {}

  ngOnInit() {}

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
