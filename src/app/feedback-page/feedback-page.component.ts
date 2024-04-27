import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EndpageComponent } from '../endpage/endpage.component';

@Component({
  selector: 'app-feedback-page',
  templateUrl: './feedback-page.component.html',
  styleUrls: ['./feedback-page.component.scss'],
})
export class FeedbackPageComponent {
  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(EndpageComponent);
  }

  comment: string = '';

    submitFeedback() {
        alert('We appreciate your feedback');
        this.comment = ''; // Clear the comment after submission
    }
}
