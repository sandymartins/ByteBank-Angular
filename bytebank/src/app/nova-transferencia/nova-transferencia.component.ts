//Arquivo da classe do componente
import { Component } from "@angular/core";

@Component({
    selector:'app-nova-transferencia', //todos os componentes precisam ter esse prefixo (app), no arquivo package.json está declarado!!
    templateUrl:'./nova-transferencia.component.html',
    styleUrls:['./nova-transferencia.component.scss']
})
export class novaTransferenciaComponent{
    //criando métodos

    valor: number;
    destino: number;

    transferir(){
      console.log('Solicitada nova transferência');
      console.log('Valor: ', this.valor);
      console.log('Destino: ', this.destino);
    }
}
