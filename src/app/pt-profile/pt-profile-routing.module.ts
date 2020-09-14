import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PtProfilePage } from './pt-profile.page';

const routes: Routes = [
  {
    path: '',
    component: PtProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PtProfilePageRoutingModule {}
