import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-sidepage',
  templateUrl: './sidepage.component.html',
  styleUrls: ['./sidepage.component.scss']
})
export class SidepageComponent {



  constructor(private spinner: NgxSpinnerService){}

  openSpinner() {
    /** spinner starts on init */
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }
}
