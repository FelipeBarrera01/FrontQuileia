import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonConPage } from './common-con.page';

const routes: Routes = [
  {
    path: '',
    component: CommonConPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommonConPageRoutingModule {}
