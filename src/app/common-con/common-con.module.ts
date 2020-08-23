import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommonConPageRoutingModule } from './common-con-routing.module';

import { CommonConPage } from './common-con.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommonConPageRoutingModule
  ],
  declarations: [CommonConPage]
})
export class CommonConPageModule {}
