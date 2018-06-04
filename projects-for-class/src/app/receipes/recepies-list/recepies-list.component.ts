import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes/recipe.model';

@Component({
  selector: 'recepies-list',
  templateUrl: './recepies-list.component.html',
  styleUrls: ['./recepies-list.component.css']
})
export class RecepiesListComponent implements OnInit {
  recipes: Recipe[] = [{
    name: ' A new recipe',
    description: 'test recipe',
    imagePath:'https://www.inspiredtaste.net/wp-content/uploads/2012/02/Easy-Chicken-Ragu-1200.jpghttps://www.inspiredtaste.net/wp-content/uploads/2012/02/Easy-Chicken-Ragu-1200.jpg',

  }]; new Recipe('A test Recipe',
   'This is a Simple test.',
   'http://www.cbc.ca/food/content/images/recipes/ChickenandWaffles.jpg')

  constructor() { }

  ngOnInit() {
  }

}
