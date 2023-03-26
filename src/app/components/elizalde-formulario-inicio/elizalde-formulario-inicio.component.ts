import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ElizaldeUsuario } from 'src/app/interface/elizalde-usuario';
import { ElizaldeUsuarioModule } from 'src/app/module/elizalde-usuario/elizalde-usuario.module';

@Component({
  selector: 'app-elizalde-formulario-inicio',
  templateUrl: './elizalde-formulario-inicio.component.html',
  styleUrls: ['./elizalde-formulario-inicio.component.css']
})
export class ElizaldeFormularioInicioComponent {
constructor(private router: Router, private dialogRef: MatDialogRef<ElizaldeFormularioInicioComponent>) { }

  usuarioLogin = new FormGroup({
    usuario: new FormControl('',Validators.required),
    password: new FormControl('', Validators.required)
  })

  

  onSubmit(){
    console.log(this.usuarioLogin.value)
    let existe=false;
    let usuarios:ElizaldeUsuario[]=new ElizaldeUsuarioModule().usuario;
    for(let i=0;i<usuarios.length;i++){
      if(usuarios[i].usuario==this.usuarioLogin.value.usuario && usuarios[i].clave==this.usuarioLogin.value.password){
        existe=true;
        break;
      }
    }
    if(existe){
      alert('INGRESO EXITOSO!');
      this.router.navigate(['principal',this.usuarioLogin.value.usuario]);
      this.dialogRef.close(); 
    }else{
      alert('Usuario o contraseña incorrectos');
    }
    
    
  }
}
