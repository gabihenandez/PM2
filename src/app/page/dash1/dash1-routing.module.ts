import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dash1Page } from './dash1.page';

const routes: Routes = [
  {
    path: '',
    component: Dash1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dash1PageRoutingModule {}
