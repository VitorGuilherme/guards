import { LeadsComponent } from './pages/leads/leads.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { DadshboardComponent } from './pages/dadshboard/dadshboard.component';

const routes: Routes = [
  {
    path: '',
    component: DadshboardComponent
  },
  {
    path: 'leads',
    component: LeadsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
