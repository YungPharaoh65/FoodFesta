import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ItemService } from '../service';

@Component({
  selector: 'app-pop',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopComponent {
  url = './assets/images/Wavy Buddies Torso.png';
  currentImage: any;
  sharedService: any;

  onselectFile(event: any) {
    if (event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (loadEvent: any) => {
        this.url = loadEvent.target.result;
      };
    }
  }

  itemName = '';
  itemPrice = '';
  boxColor = '';
  imagePath = '';

  constructor(
    private dialog: MatDialog,
    private itemService: ItemService
  ) {}

  onSelectImage(imageUrl: string) {
    this.sharedService.changeImage(imageUrl);
  }

  openDialog() {
    this.dialog.open(PopComponent);
  }

  addItem() {
    const newItem = {
      name: this.itemName,
      price: this.itemPrice,
      color: this.boxColor,
      image: this.imagePath,
    };

    this.itemService.addItem(newItem);

    // Optionally, clear the form fields after adding the item
    this.itemName = '';
    this.itemPrice = '';
    this.boxColor = '';
    this.imagePath = '';
  }

  handleFileInput(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // Assuming you have a method to convert the file to a base64-encoded string
      this.convertImageToBase64(file);
    }
  }

  convertImageToBase64(file: File): void {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      // Set the imagePath to the base64-encoded image data
      this.imagePath = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}
