import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  FinalResultRecipies: boolean = true;
  FinalResultShopping: boolean = false;

  onAction(HeaderInfo: {valorHeaderRecipies: boolean, valorHeaderShopping: boolean}) {
    console.log(HeaderInfo);
    this.FinalResultRecipies = HeaderInfo.valorHeaderRecipies;
    this.FinalResultShopping = HeaderInfo.valorHeaderShopping;
  }
}
