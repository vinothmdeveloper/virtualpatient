import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchVirtualHospitalPage } from './search-virtual-hospital.page';

const routes: Routes = [
  {
    path: '',
    component: SearchVirtualHospitalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchVirtualHospitalPageRoutingModule {}
