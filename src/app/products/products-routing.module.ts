import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UnCommonPageComponent } from './pages/common-page/uncommon-page.component';

const routes: Routes = [
  {
    path:'',
    component: BasicsPageComponent
  },
  {
    path:'numbers',
    component: NumbersPageComponent
  },
  {
    path:'common',
    component: UnCommonPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
