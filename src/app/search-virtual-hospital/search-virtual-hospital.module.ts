import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchVirtualHospitalPageRoutingModule } from './search-virtual-hospital-routing.module';

import { SearchVirtualHospitalPage } from './search-virtual-hospital.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchVirtualHospitalPageRoutingModule
  ],
  declarations: [SearchVirtualHospitalPage]
})
export class SearchVirtualHospitalPageModule {}
