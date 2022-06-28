import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultaPeliculaComponent } from './components/consulta-pelicula/consulta-pelicula.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { MenuComponent } from './components/menu/menu.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AyudaComponent } from './components/ayuda/ayuda.component';
import { PieComponent } from './components/pie/pie.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

//ANGULAR MATERIAL
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { NoautorizadoComponent } from './components/noautorizado/noautorizado.component';
import { PruebasPromiseComponent } from './components/pruebas-promise/pruebas-promise.component';
import { PruebasObservableComponent } from './components/pruebas-observable/pruebas-observable.component';
import { ConsultaPeliculasComponent } from './components/consulta-peliculas/consulta-peliculas.component';
import { HttpTestComponent } from './components/http-test/http-test.component';
import { HttpTestHeadersComponent } from './components/http-test-headers/http-test-headers.component';


@NgModule({
  declarations: [
    AppComponent,
    ConsultaPeliculaComponent,
    CabeceraComponent,
    MenuComponent,
    InicioComponent,
    RegistroComponent,
    AyudaComponent,
    PieComponent,
    NoautorizadoComponent,
    PruebasPromiseComponent,
    PruebasObservableComponent,
    ConsultaPeliculasComponent,
    HttpTestComponent,
    HttpTestHeadersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
