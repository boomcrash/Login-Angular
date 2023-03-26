import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElizaldeUsuario } from 'src/app/interface/elizalde-usuario';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ElizaldeUsuarioModule {
  static usuario: any; 

  constructor(){}

  usuario:ElizaldeUsuario[]=[
    {
      usuario:'admin',
      clave:'admin'
    },
    {
      usuario:'normal',
      clave:'normal'
    },
    {
      usuario:'jorge',
      clave:'1234'
    }
  ]
}
