import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetmobilenumberPageRoutingModule } from './getmobilenumber-routing.module';

import { GetmobilenumberPage } from './getmobilenumber.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetmobilenumberPageRoutingModule
  ],
  declarations: [GetmobilenumberPage]
})
export class GetmobilenumberPageModule {}
