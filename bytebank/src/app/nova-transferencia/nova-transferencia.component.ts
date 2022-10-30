//Arquivo da classe do componente
import { Component, Output } from "@angular/core";
import { EventEmitter } from '@angular/core';
import { Transferencia } from "../models/transferencia.model";
import { TransferenciaService } from "../services/transferencia.service";
import { Router } from '@angular/router';

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

    constructor(private service: TransferenciaService, private router: Router){

    }

    transferir(){
      console.log('Solicitada nova transferência');

      const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino };

      this.service.adicionar(valorEmitir).subscribe(resultado => {
        console.log(resultado);
        //this.limparCampos();//método para que no final os campos sejam limpos.
        this.router.navigateByUrl('extrato'); //fazendo com que o user seja direcionado pra pag de extrato depois de transferir.
      },
      error => console.log(error));


    }

    limparCampos(){
      this.valor = 0;
      this.destino = 0;
    }
}
