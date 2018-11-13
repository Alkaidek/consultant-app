import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'woj', loadChildren: './woj/woj.module#WojPageModule' },
  { path: 'city/:woj', loadChildren: './city/city.module#CityPageModule' },
  { path: 'details/:woj/:city', loadChildren: './details/details.module#DetailsPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
