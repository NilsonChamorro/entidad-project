import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfesorListPage } from './profesor-list.page';

const routes: Routes = [
  {
    path: '',
    component: ProfesorListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfesorListPageRoutingModule {}
