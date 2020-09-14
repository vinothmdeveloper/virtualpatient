import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PtProfilePageRoutingModule } from './pt-profile-routing.module';

import { PtProfilePage } from './pt-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PtProfilePageRoutingModule
  ],
  declarations: [PtProfilePage]
})
export class PtProfilePageModule {}
