import { Injectable } from '@angular/core';
import { Contacto } from './models/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  readonly CONTACTOS_KEY:string = "CONTACTOS_KEY";
  readonly ID_ITERATIONS = 1;

  constructor() { }

  getContactos():Contacto[]{
    let stored = localStorage.getItem(this.CONTACTOS_KEY);
    if(stored){
      return JSON.parse(stored);
    }
    else return [];
  }


   
  saveOrUpdate(c:Contacto){
    let contactos = this.getContactos();
    let id = c.id;
    if(id && id.length > 0){
      let contactoEncontrado = contactos.findIndex(contacto => {contacto.id == id});
      if(contactoEncontrado){
        contactos.splice(contactoEncontrado, 1);
      }
      contactos.push(c);
    }
    else{
      c.id = this.createId();
      contactos.push(c);
    }
    this.saveContactos(contactos);
  }

  delete(id:string){
    let contactos = this.getContactos();
    let index = contactos.findIndex(c2=>c2.id===id);
    if(index != undefined){
      contactos.splice(index,1);
    }
    this.saveContactos(contactos);
  }

  find(id:string):Contacto|undefined{
    let contactos = this.getContactos();
    return contactos.find(c => c.id == id);
  }

  private saveContactos(contactos:Contacto[]):void{
    localStorage.setItem(this.CONTACTOS_KEY, JSON.stringify(this.sortByName(contactos)));
  }

  private sortByName(contactos:Contacto[]){
    return contactos.sort((c1,c2) => {
      if(c1.nombre < c2.nombre) return -1;
      else if(c2.nombre < c1.nombre) return 1;
      return 0;
    })
  }

  private createId():string{
    let id= "" + Date.now();
    for(let i = 0;i<this.ID_ITERATIONS;i++) id = id + "-" + this.createRandomString(4);
    return id;
  }

  private createRandomString(length:number):string{
    let ret = "";
    for(let i = 0; i<length;i++){
      let seed = Math.floor(Math.random()*35);
      let char = "";
      if(seed < 25){
        char = String.fromCharCode("a".charCodeAt(0) + seed);
      } else {
        char = char + (seed - 25);
      }
      ret += char;
    }
    return ret;
  }
}
