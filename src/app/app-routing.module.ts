import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppinglistComponent } from "./shoppinglist/shoppinglist.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipedetailComponent } from "./recipes/recipedetail/recipedetail.component";
import { RecipeeditComponent } from "./recipes/recipeedit/recipeedit.component";

const appRoutes = [
  { path: "", redirectTo: "/recipes", pathMatch: "full" },
  {
    path: "recipes",
    component: RecipesComponent,
    children: [
      { path: "", component: RecipeStartComponent },
      { path: "new", component: RecipeeditComponent },
      { path: ":id", component: RecipedetailComponent },
      { path: ":id/edit", component: RecipeeditComponent }
    ]
  },
  { path: "shoppinglist", component: ShoppinglistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
