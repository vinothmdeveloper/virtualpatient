import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectVirtualHospitalPageRoutingModule } from './select-virtual-hospital-routing.module';

import { SelectVirtualHospitalPage } from './select-virtual-hospital.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectVirtualHospitalPageRoutingModule
  ],
  declarations: [SelectVirtualHospitalPage]
})
export class SelectVirtualHospitalPageModule {}
