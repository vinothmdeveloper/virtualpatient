import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShareCirclePage } from './share-circle.page';

const routes: Routes = [
  {
    path: '',
    component: ShareCirclePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShareCirclePageRoutingModule {}
