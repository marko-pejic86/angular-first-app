import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe (
      'Test Recipe',
      'This is just a test recipe',
      'https://cdn-image.myrecipes.com/sites/default/files/styles/medium_2x/public/image/recipes/sl/13/07/firecracker-grilled-salmon-sl-x.jpg?itok=DXNiVdiS'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
