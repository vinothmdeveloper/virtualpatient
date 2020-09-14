import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetmobilenumberPage } from './getmobilenumber.page';

const routes: Routes = [
  {
    path: '',
    component: GetmobilenumberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetmobilenumberPageRoutingModule {}
