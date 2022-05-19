import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HijoAComponent } from './hijo-a.component';
import { HijoBComponent } from './hijo-b.component';
import { NietoAComponent } from './nieto-a.component';
import { NietoBComponent } from './nieto-b.component';
import { PadreComponent } from './padre.component';

@NgModule({
  declarations: [
    AppComponent,
    PadreComponent,
    HijoAComponent,
    HijoBComponent,
    NietoAComponent,
    NietoBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
