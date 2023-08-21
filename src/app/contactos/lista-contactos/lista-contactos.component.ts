import { Component, OnInit } from '@angular/core';
import { ContactosService } from '../contactos.service';
import { Router } from '@angular/router';
import { Contacto } from '../models/contacto';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent implements OnInit {

  contactos:Contacto[] = [];
  constructor(private contactosService:ContactosService){

  }

  ngOnInit(): void {
    this.contactos = this.contactosService.getContactos();
  }

  borrarContacto(id:string){
    this.contactosService.delete(id);
    this.contactos = this.contactosService.getContactos();
  }

}
