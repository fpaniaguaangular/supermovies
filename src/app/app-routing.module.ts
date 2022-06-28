import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AyudaComponent } from './components/ayuda/ayuda.component';
import { ConsultaPeliculaComponent } from './components/consulta-pelicula/consulta-pelicula.component';
import { ConsultaPeliculasComponent } from './components/consulta-peliculas/consulta-peliculas.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NoautorizadoComponent } from './components/noautorizado/noautorizado.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ControlRegistroGuard } from './guards/control-registro.guard';

const routes: Routes = [
    {path:'inicio',component:InicioComponent},
    {path:'registro',component:RegistroComponent},
    {path:'consulta',component:ConsultaPeliculaComponent, canActivate:[ControlRegistroGuard]},
    {path:'consultaMultiple',component:ConsultaPeliculasComponent},
    {path:'ayuda',component:AyudaComponent},
    {path:'help',redirectTo:'ayuda'},//Redirección (alias)
    {path:'noautorizado',component:NoautorizadoComponent},
    {path:'',component:InicioComponent,pathMatch:'full'},
    {path:'**',component:InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
