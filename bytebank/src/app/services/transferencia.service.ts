//Camada que consome a API Rest
import { Injectable } from '@angular/core';

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

  constructor() {
    this.listaTransferencia = [];
  }

  get transferencias(){//pega as dependencias
    return this.listaTransferencia;//e coloca dentro da lista
  }

  adicionar(transferencia: any){//recebendo transferencia como parametro
    this.hidratar(transferencia);
    this.listaTransferencia.push(transferencia); //declarando que transferencia vai adicionar o valor que está em evento
  }

  private hidratar(transferencia: any){//recebendo transferencia como parametro
    transferencia.data = new Date();//criando um objeto
  }

}
