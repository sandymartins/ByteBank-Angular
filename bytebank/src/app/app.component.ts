import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';

@Component({ //metadata que adiciona algumas propriedades na minha classe
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bytebank';
  transferencias: any[] = []; //array, para puxar uma LISTA de transferencias e = [] para inicializar a lista

  constructor(private service: TransferenciaService) {}

  transferir($event) {
    this.service.adicionar($event);
  }
}
