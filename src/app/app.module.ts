import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormClienteComponent } from './formCliente/formCliente.component';
import { ListClienteComponent } from './listCliente/listCliente.component';
import { ListUsuarioComponent } from './listUsuario/listUsuario.component';
import { ListProjetoComponent } from './listProjeto/listProjeto.component';
import { ListCenarioComponent } from './listCenario/listCenario.component';
import { FormCenarioComponent } from './formCenario/formCenario.component';
import { FormProjetoComponent } from './formProjeto/formProjeto.component';
import { FormUsuarioComponent } from './formUsuario/formUsuario.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
   declarations: [
      AppComponent,
      FormClienteComponent,
      ListClienteComponent,
      ListUsuarioComponent,
      ListProjetoComponent,
      ListCenarioComponent,
      FormCenarioComponent,
      FormProjetoComponent,
      FormUsuarioComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule

   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
