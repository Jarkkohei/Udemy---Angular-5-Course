import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    DropdownDirective,
    NgForm
  ],
  exports: [
    CommonModule,
    DropdownDirective,
    NgForm
  ]
})

export class SharedModule {

}
