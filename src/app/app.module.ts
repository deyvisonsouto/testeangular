import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './admin/default/default.component';
import { DefaultService } from './shared/default.service';
import { TableComponent } from './shared/table/table.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { MDL } from './shared/mdl';
import { TesteNovoComponent } from './teste-novo/teste-novo.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    TableComponent,
    TesteNovoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    DefaultService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
