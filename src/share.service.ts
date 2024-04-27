// shared.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  getSelectedItems(): { name: string; price: number; count: number; }[] {
    throw new Error('Method not implemented.');
  }
  private imageSource = new BehaviorSubject<string>('');
  currentImage = this.imageSource.asObservable();

  changeImage(imageUrl: string) {
    this.imageSource.next(imageUrl);
  }

  private selectedItemsSource = new BehaviorSubject<any[]>([]);
  currentSelectedItems = this.selectedItemsSource.asObservable();

  updateSelectedItems(items: any[]) {
    this.selectedItemsSource.next(items);
  }
  
}
