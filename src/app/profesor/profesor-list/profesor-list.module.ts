import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfesorListPageRoutingModule } from './profesor-list-routing.module';

import { ProfesorListPage } from './profesor-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfesorListPageRoutingModule
  ],
  declarations: [ProfesorListPage]
})
export class ProfesorListPageModule {}
