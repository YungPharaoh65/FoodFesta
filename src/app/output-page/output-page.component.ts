import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-output-page',
  templateUrl: './output-page.component.html',
  styleUrls: ['./output-page.component.scss'],
})
export class OutputPageComponent implements OnInit {
  selectedItems: { name: string; price: number; count: number }[] = [];
  sharedService: any;

  constructor(
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    // Retrieve the selected items from the route
    this.route.params.subscribe((params) => {
      if (params['selectedItems']) {
        this.selectedItems = JSON.parse(params['selectedItems']);
        console.log('Selected Items:', this.selectedItems);
        // You can also update the items in the shared service if needed
        this.sharedService.updateSelectedItems(this.selectedItems);
      }
    });

    this.selectedItems = this.sharedService.getSelectedItems();
  }

  openSpinner() {
    /** spinner starts on init */
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }

  // ... other methods
}
