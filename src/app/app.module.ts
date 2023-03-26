import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ElizaldeHeaderComponent } from './components/elizalde-header/elizalde-header.component';
import { ElizaldeInicioSesionComponent } from './components/elizalde-inicio-sesion/elizalde-inicio-sesion.component';
import { ElizaldePaginaPrinciaplComponent } from './components/elizalde-pagina-princiapl/elizalde-pagina-princiapl.component';
import { ElizaldeFormularioInicioComponent } from './components/elizalde-formulario-inicio/elizalde-formulario-inicio.component';
import { ReactiveFormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input'
import {MatCardModule} from '@angular/material/card'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    ElizaldeHeaderComponent,
    ElizaldeInicioSesionComponent,
    ElizaldePaginaPrinciaplComponent,
    ElizaldeFormularioInicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, ReactiveFormsModule, MatInputModule, 
    MatCardModule, MatToolbarModule, MatIconModule, MatDialogModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
