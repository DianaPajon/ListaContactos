import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';
import { EditarContactoComponent } from './editar-contacto/editar-contacto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListaContactosComponent,
    EditarContactoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class ContactosModule { }
