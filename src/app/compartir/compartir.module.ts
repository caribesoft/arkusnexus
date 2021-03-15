import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { CompartirRoutingModule } from './compartir-routing.module';
import { CompartirComponent } from './compartir.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AdminModule } from '../admin/admin.module';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { MatTabsModule} from '@angular/material/tabs';
import { MatMenuModule} from '@angular/material/menu';
import { MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule} from '@angular/material/list';
import { MatGridListModule} from '@angular/material/grid-list'
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [CompartirComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTabsModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatGridListModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
  	HttpClientModule,
  	MatTabsModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatGridListModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class CompartirModule { }
