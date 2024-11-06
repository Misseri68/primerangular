import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimerComponent } from '../components/primercomponent/primer.component';
import { HooksAngular } from '../components/hooks/hooksangular.component';
import { DeportesComponent } from '../components/deportes/deportes.component';
import { FormsModule } from '@angular/forms';
import { FormsBindingComponent } from '../components/formsbinding/formsbinding.component';
import { SumarnumerosComponent } from '../components/sumarnumeros/sumarnumeros.component';
import { TablamultiplicarComponent } from '../components/tablamultiplicar/tablamultiplicar.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponent,
    HooksAngular,
    DeportesComponent,
    FormsBindingComponent,
    SumarnumerosComponent,
    TablamultiplicarComponent
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
