import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectVirtualHospitalPage } from './select-virtual-hospital.page';

const routes: Routes = [
  {
    path: '',
    component: SelectVirtualHospitalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectVirtualHospitalPageRoutingModule {}
