import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FoodFesta';

  darkmode = false;
modetoggle(){

  this.darkmode = !this.darkmode;
  document.documentElement.setAttribute('data-theme',this.darkmode? "dark" : "light");

}
}
