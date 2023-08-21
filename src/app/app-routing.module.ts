import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { EditarContactoComponent } from './contactos/editar-contacto/editar-contacto.component';
import { ListaContactosComponent } from './contactos/lista-contactos/lista-contactos.component';

const routes: Routes = [
  {path:"", component:ListaContactosComponent, data:{animation:'raiz'}},
  {path:"contacto", component:EditarContactoComponent, data:{animation:'nuevo'}},
  {path:"contacto/:id", component:EditarContactoComponent, data:{animation:'editar'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [RouterOutlet]
})
export class AppRoutingModule { }
