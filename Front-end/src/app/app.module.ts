import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ResultsComponent } from './results/results.component';
import { DurationsComponent } from './durations/durations.component';
import { TestsComponent } from './tests/tests.component';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';

import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    DurationsComponent,
    TestsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    PanelModule,
    FormsModule,
    DialogModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
