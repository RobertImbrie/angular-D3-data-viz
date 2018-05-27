import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { D3Service } from 'd3-ng2-service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './core/home/home.component';
import { HeaderComponent } from './core/header/header.component';
import { DataDisplayComponent } from './data-display/data-display.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { DataElementComponent } from './data-display/data-element/data-element.component';
import { BarChartDirective } from './data-display/bar-chart.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DataDisplayComponent,
    FormComponent,
    DataElementComponent,
    BarChartDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    DataService,
    D3Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
