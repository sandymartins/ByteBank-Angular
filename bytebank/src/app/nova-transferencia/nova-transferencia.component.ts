//Arquivo da classe do componente
import { Component, Output } from "@angular/core";
import { EventEmitter } from '@angular/core';

@Component({

    selector:'app-nova-transferencia', //todos os componentes precisam ter esse prefixo (app), no arquivo package.json está declarado!!
    templateUrl:'./nova-transferencia.component.html',
    styleUrls:['./nova-transferencia.component.scss']
})
export class novaTransferenciaComponent{
    //criando métodos/Eventos

    //Evento = aoTransferir e objeto criado EventEmitter
    @Output() aoTransferir = new EventEmitter<any>(); //criando um método/Evento que vai mostrar a info para o usuário.

    valor: number; //variáveis
    destino: number;

    transferir(){
      console.log('Solicitada nova transferência');

      const valorEmitir = { valor: this.valor, destino: this.destino };
      this.aoTransferir.emit(valorEmitir);//definindo o valor a ser emitido no console

      this.limparCampos();//método para que no final os campos sejam limpos.
    }

    limparCampos(){
      this.valor = 0;
      this.destino = 0;
    }
}
