import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartpageComponent } from './startpage/startpage.component';
import { SidepageComponent } from './sidepage/sidepage.component';
import { FoodCatalogueComponent } from './food-catalogue/food-catalogue.component';
import { OrdersComponent } from './orders/orders.component';
import { OutputPageComponent } from './output-page/output-page.component';
import { EndpageComponent } from './endpage/endpage.component';
import { FeedbackPageComponent } from './feedback-page/feedback-page.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path: '', component: StartpageComponent },
  { path: 'sidepage', component: SidepageComponent },
  { path: 'foodcatalogue', component: FoodCatalogueComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'output /:selectedItems', component: OutputPageComponent },
  { path: 'endpage', component: EndpageComponent },
  { path: 'feedback', component: FeedbackPageComponent },
  {path:'aboutus', component:AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
