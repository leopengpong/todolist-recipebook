import {
  Component, OnInit, EventEmitter, Output
} from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is a test', 
      'https://images-na.ssl-images-amazon.com/images/I/71QQ5IoWctL._AC_SL1036_.jpg'),
    new Recipe('Another test recipe', 'this is a test',
      'https://images-na.ssl-images-amazon.com/images/I/71QQ5IoWctL._AC_SL1036_.jpg'),
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect (recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
