import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfesorEditPage } from './profesor-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ProfesorEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfesorEditPageRoutingModule {}
