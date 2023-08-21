import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarContactoComponent } from './contactos/editar-contacto/editar-contacto.component';
import { ListaContactosComponent } from './contactos/lista-contactos/lista-contactos.component';

const routes: Routes = [
  {path:"", component:ListaContactosComponent, data:{animation:'enterLeavePage'}},
  {path:"contacto", component:EditarContactoComponent, data:{animation:'enterLeavePage'}},
  {path:"contacto/:id", component:EditarContactoComponent, data:{animation:'enterLeavePage'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
