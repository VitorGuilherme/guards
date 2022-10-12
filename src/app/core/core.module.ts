import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { DadshboardComponent } from './pages/dadshboard/dadshboard.component';
import { LeadsComponent } from './pages/leads/leads.component';


@NgModule({
  declarations: [
    DadshboardComponent,
    LeadsComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
