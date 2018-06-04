import { Component, OnInit } from '@angular/core';
import { Ingreident } from '../Shared/ingredient.model';

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingreidents: Ingredient[] = [{
name:'apples',
amount: 5
},
new Ingreident('Tomatoes', 10)
];

  constructor() { }

  ngOnInit() {
  }

}
