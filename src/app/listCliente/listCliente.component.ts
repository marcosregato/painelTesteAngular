import { Component, OnInit } from '@angular/core';
import { Clientes } from '../clientes';
import {ClientesService} from '../clientes.service';


@Component({
  selector: 'app-listCliente',
  templateUrl: './listCliente.component.html',
  styleUrls: ['./listCliente.component.css']
})
export class ListClienteComponent implements OnInit {

  constructor(private clienteService: ClientesService) { }

  public clientes :Clientes[];

  ngOnInit() {
    this.clienteService.getclientes()
      .subscribe(
        retorno =>{
          this.clientes = retorno.map(item =>{
            return new Clientes(
              item.id,
              item.nome,
              item.email
            )
          }
        )
      }
    )
  }
}
