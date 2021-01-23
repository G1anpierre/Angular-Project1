import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() Receta: {name: string, description: string, imagePath: string};
  @Output() recipeSelected = new EventEmitter<void>();


  onClick() {
    console.log("I have clicked!");
    this.recipeSelected.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
