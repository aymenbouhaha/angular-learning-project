import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {


  ingredients :Ingredient[]
  // =[
  //   new Ingredient('Apples', 5),
  //   new Ingredient('Tomatoes', 10),
  // ]

  // addItem(ingredient : Ingredient){
  //   this.ingredients.push(ingredient)
  // }

  constructor(private  shoppingListService :ShoppingListService ) { }

  ngOnInit(): void {
    this.ingredients=this.shoppingListService.getIngredients()
  }

  onEditItem(index : number) {
    this.shoppingListService.editingStarted.next(index)
  }
}
