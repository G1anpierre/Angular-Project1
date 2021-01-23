import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() newShop = new EventEmitter<Ingredient>();
  

  onAddShop(nameInput: HTMLInputElement, valueInput){
    
    const newIngredient = new Ingredient(nameInput.value, valueInput.value);
    this.newShop.emit(newIngredient);
    
  }

  constructor() { }

  ngOnInit() {
  }

}
