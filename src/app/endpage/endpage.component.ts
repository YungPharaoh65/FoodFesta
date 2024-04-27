import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FeedbackPageComponent } from '../feedback-page/feedback-page.component';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-endpage',
  templateUrl: './endpage.component.html',
  styleUrls: ['./endpage.component.scss']
})
export class EndpageComponent {


openDialog2() {
  this.dialog.open(FeedbackPageComponent);
}

  gifUrl: any;

constructor(
  private sanitizer: DomSanitizer,
  private dialog: MatDialog,
  private spinner: NgxSpinnerService
) {
  // Replace 'assets/giphy.gif' with the actual path to your GIF file.
  this.gifUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    'assets/miguelgarest.gif'
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
