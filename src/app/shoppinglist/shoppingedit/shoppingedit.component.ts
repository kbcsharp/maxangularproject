import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter
} from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";

@Component({
  selector: "app-shoppingedit",
  templateUrl: "./shoppingedit.component.html",
  styleUrls: ["./shoppingedit.component.scss"]
})
export class ShoppingeditComponent implements OnInit {
  @Output() ingredientCreated = new EventEmitter<Ingredient>();

  @ViewChild("nameInput", { static: true }) nameInputRef: ElementRef;
  @ViewChild("amountInput", { static: true }) amountInputRef: ElementRef;

  constructor() {}

  ngOnInit() {}

  onAddIngredient() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientCreated.emit(newIngredient);
    this.nameInputRef.nativeElement.value = "";
    this.amountInputRef.nativeElement.value = "";
  }

  clearFields() {
    this.nameInputRef.nativeElement.value = "";
    this.amountInputRef.nativeElement.value = "";
  }
}
