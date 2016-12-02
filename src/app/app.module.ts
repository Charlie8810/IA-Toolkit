import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './widgets/nav-menu/nav-menu.component';
import { InicioComponent } from './pages/inicio/inicio.component';

import { routing } from './app.routes';
import { ProcesosComponent } from './pages/procesos/procesos.component';
import { CauthMantainerComponent } from './pages/cauth-mantainer/cauth-mantainer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    InicioComponent,
    ProcesosComponent,
    CauthMantainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
