import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { OrderComponent } from './order/order.component';
import { NetworkingComponent } from './networking/networking.component';
import { SolarenergyComponent } from './solarenergy/solarenergy.component';
import { FireHydrantsSprinklersComponent } from './fire-hydrants-sprinklers/fire-hydrants-sprinklers.component';
import { ElectricalComponent } from './electrical/electrical.component';
import { SecuritySystemsComponent } from './security-systems/security-systems.component';

export const routes: Routes = [
    //{'path':'', component:HeaderComponent},
    // { path: 'complete-electrical-works', component: CompleteElectricalWorksComponent },
//   { path: 'fire-hydrant-sprinklers', component: FireHydrantSprinklersComponent },
  // { path: '', redirectTo: '/complete-electrical-works', pathMatch: 'full' },
  // { path: '**', redirectTo: '/complete-electrical-works', pathMatch: 'full' }
    {'path':'', component:HomeComponent},
    {'path':'aboutUs', component:AboutComponent},
    {'path':'contact', component:ContactComponent},
  { 'path': '', redirectTo: '/email', pathMatch: 'full' },
  // { path: 'products', component: ProductsComponent },
  { 'path': 'gallery', component: GalleryComponent },
  { path: 'order-now', component: OrderComponent },
  {path:'networking',component:NetworkingComponent},
  { 'path': 'electrical', component: ElectricalComponent },
  { 'path': 'solarenergy', component: SolarenergyComponent },
  { 'path': 'security-systems', component: SecuritySystemsComponent },
  { 'path': 'fire-hydrants-sprinklers', component: FireHydrantsSprinklersComponent }
];

