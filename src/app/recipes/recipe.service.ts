import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Kerroshamppari',
      'Maukas kerroshamppari',
      'https://d36wnpk9e3wo84.cloudfront.net/menu-item-images/800/web-butter-burger-cheese-double.jpg',
      [
        new Ingredient('Sämpylät', 2),
        new Ingredient('Pihvi', 2),
        new Ingredient('Juusto', 2),
        new Ingredient('Salaatti', 1),
        new Ingredient('Ketsuppi', 1),
      ]),
    new Recipe('Hodari',
      'Nami hodari',
      'https://blogcontagiros.files.wordpress.com/2011/05/hot_dog_w_mustard2.jpg',
      [
        new Ingredient('Sämpylä', 1),
        new Ingredient('Nakki', 1),
        new Ingredient('Sinappi', 1),
        new Ingredient('kurkkusalaatti', 1),
      ]),
    new Recipe('Pizza',
      'Jee pizzaa',
      'https://mob.kotipizza.fi/kuvat/tuotteet/pizza-pepperoni-600x600.png',
      [
        new Ingredient('Pohja', 1),
        new Ingredient('Tomaattikastike', 1),
        new Ingredient('Pepperonisiivu', 10),
        new Ingredient('Ananaspalat (prk)', 1),
        new Ingredient('Juustoraaste (g)', 100),
        new Ingredient('Tonnikala', 1),
        new Ingredient('Kinkku (g)', 50),
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    //  Return a COPY of the recipes-array.
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
      this.slService.addIngrediets(ingredients);
  }
}
