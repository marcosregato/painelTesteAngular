import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clientes } from './clientes';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private url = "http://localhost:3000/data";
  constructor(private httpClient:HttpClient) { }

  getclientes():Observable<Clientes[]>{

    return this.httpClient.get<Clientes[]>(this.url);

  }

}
