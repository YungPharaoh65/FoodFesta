import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartpageComponent } from './startpage/startpage.component';
import { SidepageComponent } from './sidepage/sidepage.component';
import { FoodCatalogueComponent } from './food-catalogue/food-catalogue.component';
import { OrdersComponent } from './orders/orders.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { PopComponent } from './popup/popup.component';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SharedService } from 'src/share.service';
import { OutputPageComponent } from './output-page/output-page.component';
import { EndpageComponent } from './endpage/endpage.component';
import { FeedbackPageComponent } from './feedback-page/feedback-page.component';
import { RatingModule } from 'ng-starrating';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [
    AppComponent,
    StartpageComponent,
    SidepageComponent,
    FoodCatalogueComponent,
    OrdersComponent,
    PopComponent,
    OutputPageComponent,
    EndpageComponent,
    FeedbackPageComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    NgxSpinnerModule,
    
  ],
  providers: [SharedService],
  bootstrap: [AppComponent],
})
export class AppModule {}
