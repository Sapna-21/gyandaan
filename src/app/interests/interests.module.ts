import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddInterestsComponent } from './add-interests/add-interests.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [AddInterestsComponent],
  imports: [
    CommonModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,

    MatButtonModule
  ],
  exports: [
    AddInterestsComponent
  ]
})
export class InterestsModule { }
