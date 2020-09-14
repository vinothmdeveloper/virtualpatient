import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShareCirclePageRoutingModule } from './share-circle-routing.module';

import { ShareCirclePage } from './share-circle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareCirclePageRoutingModule
  ],
  declarations: [ShareCirclePage]
})
export class ShareCirclePageModule {}
