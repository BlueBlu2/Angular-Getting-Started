import { NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertStringsPipe } from './shared/convert-strings.pipe';
import { StarComponent } from './shared/star.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertStringsPipe,
    StarComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
