import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElizaldeCliente } from 'src/app/interface/elizalde-cliente';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ElizaldeClientesModule { 

  clientes:ElizaldeCliente[]=[
    {
      cedula:'0000000000',
      nombre:'carlos',
      apellido:'rea',
      ciudad:'guayaquil'
    },
    {
      cedula:'1111111111',
      nombre:'milton',
      apellido:'elizaga',
      ciudad:'quito'
    },
    {
      cedula:'2222222222',
      nombre:'jose',
      apellido:'jairala',
      ciudad:'quevedo'
    },
    {
      cedula:'3333333333',
      nombre:'jorge',
      apellido:'romas',
      ciudad:'manabi'
    },
    {
      cedula:'4444444444',
      nombre:'jaime',
      apellido:'machaca',
      ciudad:'ibarra'
    }
  ]

}
