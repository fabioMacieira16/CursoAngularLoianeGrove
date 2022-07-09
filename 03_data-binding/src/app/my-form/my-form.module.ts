import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyFormComponent } from './my-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    MyFormComponent
  ],
  exports: [MyFormComponent]

})

export class MyFormModule { }
