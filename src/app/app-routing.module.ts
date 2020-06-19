import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormClienteComponent } from './formCliente/formCliente.component';
import { ListClienteComponent } from './listCliente/listCliente.component';
import { ListUsuarioComponent } from './listUsuario/listUsuario.component';
import { ListProjetoComponent } from './listProjeto/listProjeto.component';
import { ListCenarioComponent } from './listCenario/listCenario.component';
import { FormCenarioComponent } from './formCenario/formCenario.component';
import { FormProjetoComponent } from './formProjeto/formProjeto.component';
import { FormUsuarioComponent } from './formUsuario/formUsuario.component';


const routes: Routes = [
  {path: 'formCliente', component: FormClienteComponent},
  {path: 'formCenario', component: FormCenarioComponent},
  {path: 'formProjeto', component: FormProjetoComponent},
  {path: 'formUsuario', component: FormUsuarioComponent},
  {path: 'listCliente', component: ListClienteComponent},
  {path: 'listUsuario', component: ListUsuarioComponent},
  {path: 'listProjeto', component: ListProjetoComponent},
  {path: 'listCenario', component: ListCenarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
