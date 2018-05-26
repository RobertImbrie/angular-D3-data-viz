import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './core/home/home.component';
import { HeaderComponent } from './core/header/header.component';
import { DataDisplayComponent } from './data-display/data-display.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { DataElementComponent } from './data-display/data-element/data-element.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DataDisplayComponent,
    FormComponent,
    DataElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
