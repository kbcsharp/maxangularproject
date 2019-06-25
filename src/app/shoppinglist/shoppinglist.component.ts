import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppinglistService } from "./shoppinglist.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-shoppinglist",
  templateUrl: "./shoppinglist.component.html",
  styleUrls: ["./shoppinglist.component.scss"]
})
export class ShoppinglistComponent implements OnInit {
  ingredients: Ingredient[];
  private ingChangeSub: Subscription;

  constructor(private shoppingListService: ShoppinglistService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingChangeSub = this.shoppingListService.ingredientsCreated.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  ngOnDestroy() {
    this.ingChangeSub.unsubscribe();
  }
}
