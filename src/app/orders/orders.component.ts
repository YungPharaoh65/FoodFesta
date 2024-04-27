import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ItemService } from '../service';
import { Observable } from 'rxjs';
import { PopComponent } from '../popup/popup.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { SharedService } from 'src/share.service';
import { EndpageComponent } from '../endpage/endpage.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {


  openSpinner() {
    /** spinner starts on init */
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }



  items$: Observable<any[]>;
  imageUrl?: string;
  selectedItems: { name: string; price: number; count: number }[] = [];
  totalOrder = 0;
  selectedItem!: { name: string; price: number; count: number };
  sharedService: any;

  constructor(
    private dialog: MatDialog,
    private itemService: ItemService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {
    this.items$ = this.itemService.items$;
  }

  @Output() selectedItemsChanged = new EventEmitter<any[]>();

  navigateToOutputPage() {
    // Pass the selected items as route data
    this.router.navigate(['/output'], {
      state: { selectedItems: this.selectedItems },
    });
  }

  updateSelectedItems() {
    this.selectedItemsChanged.emit(this.selectedItems);
  }

  ngOnInit(): void {
    this.itemService.selectedImageUrl$.subscribe((url: string) => {
      this.imageUrl = url;
    });

    this.sharedService.currentImage.subscribe((imageUrl: string | undefined) => {
      this.imageUrl = imageUrl;
    });
  }

  openDialog(): void {
    this.dialog.open(PopComponent);
  }

  addItem(name: string, price: number): void {
    if (name !== 'Add items of your choice') {
      const existingItem = this.selectedItems.find(
        (item) => item.name === name
      );

      if (existingItem) {
        existingItem.count++;
      } else {
        this.selectedItems.push({ name, price, count: 1 });
      }

      this.totalOrder += price;
    } else {
      // Handle the case when 'Add items of your choice' is clicked
      // You may want to add specific logic here based on your requirements
    }
  }

  removeItem(item: { name: string; price: number; count: number }): void {
    const index = this.selectedItems.findIndex(
      (selectedItem) => selectedItem === item
    );

    if (index !== -1) {
      // If the count is greater than 1, decrease the count
      if (item.count > 1) {
        item.count--;
        this.totalOrder -= item.price;
      } else {
        // If the count is 1, remove the item from the list
        this.selectedItems.splice(index, 1);
        this.totalOrder -= item.price;
      }
    }
  }

  getSelectedItemsDisplay(): string {
    return this.selectedItems
      .map((item) => `${item.name} - ${item.count}X`)
      .join(', ');
  }

  // Assume this method is called when items are selected
  onSelectItems(items: any[]) {
    this.selectedItems = items;
    this.sharedService.updateSelectedItems(items);
  }
}
