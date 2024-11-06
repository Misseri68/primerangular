import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimerComponent } from '../components/primer.component';
import { HooksAngular } from '../hooks/hooksangular.component';
import { DeportesComponent } from '../components/deportes/deportes.component';
import { FormsModule } from '@angular/forms';
import { FormsBindingComponent } from '../components/formsbinding/formsbinding.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponent,
    HooksAngular,
    DeportesComponent,
    FormsBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
