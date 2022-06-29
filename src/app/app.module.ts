import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultaPeliculaComponent } from './components/consulta-pelicula/consulta-pelicula.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { MenuComponent } from './components/menu/menu.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AyudaComponent } from './components/ayuda/ayuda.component';
import { PieComponent } from './components/pie/pie.component';
import { NoautorizadoComponent } from './components/noautorizado/noautorizado.component';
import { PruebasPromiseComponent } from './components/pruebas-promise/pruebas-promise.component';
import { PruebasObservableComponent } from './components/pruebas-observable/pruebas-observable.component';
import { ConsultaPeliculasComponent } from './components/consulta-peliculas/consulta-peliculas.component';
import { HttpTestComponent } from './components/http-test/http-test.component';
import { HttpTestHeadersComponent } from './components/http-test-headers/http-test-headers.component';

import { HttpTestHeadersInterceptor } from './interceptors/http-test-headers.interceptor';

//ANGULAR MATERIAL
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { FakeInterceptor } from './interceptors/fake.interceptor';

//i18n
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';
import localeEn from '@angular/common/locales/en-GB'
import localeRu from '@angular/common/locales/ru';
import { registerLocaleData } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import { TestComponent } from './components/test/test.component';

registerLocaleData(localeEs, 'es');
registerLocaleData(localeFr, 'fr');
registerLocaleData(localeEn, 'en');
registerLocaleData(localeRu, 'ru');

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
    HttpTestHeadersComponent,
    TestComponent
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
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: FakeInterceptor, multi:true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpTestHeadersInterceptor, multi:true },
    { provide: LOCALE_ID, useValue: 'ru' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'RUB'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
