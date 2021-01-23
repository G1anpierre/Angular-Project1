import { Component, Output, EventEmitter } from "@angular/core";





@Component ({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent{
    @Output() action = new EventEmitter<{valorHeaderRecipies: boolean, valorHeaderShopping: boolean}>();
    
    valorHeaderRecipies: boolean = false;
    valorHeaderShopping: boolean = false;

    activeRecipes() {
        this.valorHeaderRecipies = !this.valorHeaderRecipies;
        this.action.emit({valorHeaderRecipies: this.valorHeaderRecipies, valorHeaderShopping: this.valorHeaderShopping});
    }

    activeShoppingList() {
        this.valorHeaderShopping = !this.valorHeaderShopping;
        this.action.emit({valorHeaderRecipies: this.valorHeaderRecipies, valorHeaderShopping: this.valorHeaderShopping});
    }
}