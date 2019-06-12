import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppinglistService } from "../shoppinglist.service";

@Component({
  selector: "app-shoppingedit",
  templateUrl: "./shoppingedit.component.html",
  styleUrls: ["./shoppingedit.component.scss"]
})
export class ShoppingeditComponent implements OnInit {
  @ViewChild("nameInput", { static: true }) nameInputRef: ElementRef;
  @ViewChild("amountInput", { static: true }) amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppinglistService) {}

  ngOnInit() {}

  onAddIngredient() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.shoppingListService.addIngredient(newIngredient);
    this.nameInputRef.nativeElement.value = "";
    this.amountInputRef.nativeElement.value = "";
  }

  clearFields() {
    this.nameInputRef.nativeElement.value = "";
    this.amountInputRef.nativeElement.value = "";
  }
}
