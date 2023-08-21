import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms"
import { ActivatedRoute, Router } from '@angular/router';
import { ContactosService } from '../contactos.service';

@Component({
  selector: 'app-editar-contacto',
  templateUrl: './editar-contacto.component.html',
  styleUrls: ['./editar-contacto.component.css']
})
export class EditarContactoComponent implements OnInit {
  formGroup:FormGroup = new FormGroup({});
  titulo : string = "";
  readonly LABEL_EDITAR = "EDITAR CONTACTO";
  readonly LABEL_CREAR  = "NUEVO CONTACTO";

  constructor(
    private formBuilder:FormBuilder, 
    private activeRoute:ActivatedRoute, 
    private contactosService:ContactosService,
    private router:Router
  ){

  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      id:[''], // no se muestra, pero se guarda
      nombre:['', Validators.required],
      email:['', [Validators.email]],
      celular:['', [Validators.pattern("[0-9]{12}")]]
    })
    let id = this.activeRoute.snapshot.paramMap.get('id');
    if(id){
      let contacto = this.contactosService.find(id);
      if(contacto) this.formGroup.setValue(contacto);
      this.titulo = this.LABEL_EDITAR;
    } else {
      this.titulo = this.LABEL_CREAR;
    }
  }

  onSubmit():void{
    this.contactosService.saveOrUpdate(this.formGroup.value);
    this.router.navigate([''])
  }

  showContactWarning():boolean{
    if(this.formGroup.get('celular')?.touched && this.formGroup.get('email')?.touched){
      //Si pasó por los dos inputs y no ingresó nada se tiene que mostrar la advertencia.
      let celularValue = this.formGroup.get('celular')?.value;
      let emailValue = this.formGroup.get('email')?.value;
      return !((celularValue && celularValue.length > 0) || (emailValue && emailValue.length > 0));
    }
    else return false;    
  }

  showCellphoneWarning():boolean{
    let celular = this.formGroup.get('celular')?.value;
    if(celular){
      if(celular.length != 12 && celular.length != 10){
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}
