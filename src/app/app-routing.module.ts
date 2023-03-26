import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElizaldeInicioSesionComponent } from './components/elizalde-inicio-sesion/elizalde-inicio-sesion.component';
import { ElizaldePaginaPrinciaplComponent } from './components/elizalde-pagina-princiapl/elizalde-pagina-princiapl.component';

const routes: Routes = [
  {path:"",component:ElizaldeInicioSesionComponent},
  {path:"principal/:usuario",component:ElizaldePaginaPrinciaplComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
