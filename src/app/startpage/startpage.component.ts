import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.scss']
})
export class StartpageComponent {
modetoggle: any;
  gifUrl: any;
  spinner: any;

constructor(
  private sanitizer: DomSanitizer
) {
  // Replace 'assets/giphy.gif' with the actual path to your GIF file.
  this.gifUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    'assets/startup.gif'
  ); //this is the gif img function
}

openSpinner() {
  /** spinner starts on init */
  this.spinner.show();
  setTimeout(() => {
    this.spinner.hide();
  }, 3000);
}
}



