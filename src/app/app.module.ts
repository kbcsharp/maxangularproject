import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { ShoppinglistComponent } from "./shoppinglist/shoppinglist.component";
import { HeaderComponent } from "./header/header.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipelistComponent } from "./recipes/recipelist/recipelist.component";
import { RecipedetailComponent } from "./recipes/recipedetail/recipedetail.component";
import { ShoppingeditComponent } from "./shoppinglist/shoppingedit/shoppingedit.component";
import { RecipeitemComponent } from "./recipes/recipelist/recipeitem/recipeitem.component";
import { DropdownDirective } from "./shared/dropdown.directive";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipeeditComponent } from "./recipes/recipeedit/recipeedit.component";

@NgModule({
  declarations: [
    AppComponent,
    ShoppinglistComponent,
    HeaderComponent,
    RecipesComponent,
    RecipelistComponent,
    RecipedetailComponent,
    RecipeitemComponent,
    ShoppingeditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeeditComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
