import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompartirComponent } from '../compartir/compartir.component';

const routes: Routes = [

	{ path: 'compartir', component: CompartirComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompartirRoutingModule { }
