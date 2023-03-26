import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ElizaldeFormularioInicioComponent } from '../elizalde-formulario-inicio/elizalde-formulario-inicio.component';

@Component({
  selector: 'app-elizalde-header',
  templateUrl: './elizalde-header.component.html',
  styleUrls: ['./elizalde-header.component.css']
})
export class ElizaldeHeaderComponent {
constructor(private router:Router,
  private route:ActivatedRoute,
  //private productsService:ProductsService,
  public dialog:MatDialog) { }

  @Input() estado:string=''
  @Input() usuario:string=''

  ngOnInit(): void {
    this.usuario=this.route.snapshot.params['usuario'];
  }

  abrirVentana(estado:string){
    if(estado=='iniciar Sesion'){
      this.dialog.open(ElizaldeFormularioInicioComponent,{});
    }else if (estado=='Salir'){
      this.router.navigate(['']);
    }
  }
}
