import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { PrincipalComponent } from './principal/principal.component'
import { CompartirComponent } from './compartir/compartir.component'

const routes: Routes = [
    { path: 'principal', component: PrincipalComponent},
    { path: 'compartir', component:CompartirComponent},
	{ path: '', redirectTo: '', pathMatch: 'full' },
	

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

