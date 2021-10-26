import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dash1PageRoutingModule } from './dash1-routing.module';

import { Dash1Page } from './dash1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dash1PageRoutingModule
  ],
  declarations: [Dash1Page]
})
export class Dash1PageModule {}
