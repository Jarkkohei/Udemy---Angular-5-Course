import { Ingredient } from './../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    //  Return a COPY of the ingredients-array.
    return this.ingredients.slice();

    //return this.ingredients;


  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngrediets(ingredients: Ingredient[]) {
    /*
    for(let ingredient of ingredients) {
      this.ingredients.push(ingredient);
    }
    */

    //  ... = ES6 spread-operator
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
