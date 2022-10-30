//Camada que consome a API Rest
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from './../models/transferencia.model';

//injeção de dependência
//ao invés de criar um objeto com array e depois instaciar o objeto.
//Simplesmente crio um construtor que vai injetar uma dependência chamada TransferenciaService


//Como poderíamos obter o valor total das transferências cadastradas?
//Adicionando uma variável no service que se atualize com o valor total, sempre que houver alterações no array.
//Construindo um método na classe TransferênciaService que retorna a soma de todos os valores.
@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {//classe que prove métodos que façam as requisições rest GET, POST, PUT e DELETE
    this.listaTransferencia = [];
  }

  get transferencias(){//pega as dependencias
    return this.listaTransferencia;//e coloca dentro da lista
  }
 //métodoo observable pq só será executado se for feita a requisicao
  todas(){ Observable<Transferencia[]>//método que vai retornar todas as transferencias
    return this.httpClient.get<Transferencia[]>(this.url);//através da minha propriedade httpClient injetada, vou fazer uma requisicao GET, passando a url localhosttransferencias
  }
  adicionar(transferencia: any){//recebendo transferencia como parametro
    this.hidratar(transferencia);
    this.listaTransferencia.push(transferencia); //declarando que transferencia vai adicionar o valor que está em evento
  }

  private hidratar(transferencia: any){//recebendo transferencia como parametro
    transferencia.data = new Date();//criando um objeto
  }

}
