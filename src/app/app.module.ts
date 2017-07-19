import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { TimeComponent } from './time/time.component';
import { TimeService } from './time/time.service';
import { AnimaTesteComponent } from './anima-teste/anima-teste.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    TableComponent,
    TesteNovoComponent,
    TimeComponent,
    AnimaTesteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [
    DefaultService,
    TimeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
