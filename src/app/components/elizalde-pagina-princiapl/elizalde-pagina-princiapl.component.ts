import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ElizaldeCliente } from 'src/app/interface/elizalde-cliente';
import { ElizaldeClientesModule } from 'src/app/module/elizalde-clientes/elizalde-clientes.module';

@Component({
  selector: 'app-elizalde-pagina-princiapl',
  templateUrl: './elizalde-pagina-princiapl.component.html',
  styleUrls: ['./elizalde-pagina-princiapl.component.css']
})
export class ElizaldePaginaPrinciaplComponent {

  constructor(private router:Router,
    private route:ActivatedRoute,
    //private productsService:ProductsService,
    public dialog:MatDialog) { }

  dataSource:any=[];

  clientes:ElizaldeCliente[]=new ElizaldeClientesModule().clientes;

  displayedColumns: string[] = ['cedula', 'nombre', 'apellido','ciudad'];
  
  ngOnInit(): void {
    this.dataSource=new MatTableDataSource<ElizaldeCliente>(this.clientes as ElizaldeCliente[]);
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  } 

}
