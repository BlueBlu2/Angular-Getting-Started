import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';
import { ConvertStringsPipe } from './convert-strings.pipe';

@NgModule({
  declarations: [
    StarComponent,
    ConvertStringsPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StarComponent,
    CommonModule,
    FormsModule,
    ConvertStringsPipe
  ]
})
export class SharedModule { }
