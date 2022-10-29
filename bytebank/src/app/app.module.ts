import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { novaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { FormsModule } from '@angular/forms';

//página para declarar os componentes por módulos. Sendo a porta de entrada da aplicação
//o arquivo index.html, que chama o app.component e ele só é reconhecido pois faz parte do app.module
@NgModule({
  //local onde todos os componentes são declarados
  declarations: [
    AppComponent,
    novaTransferenciaComponent
  ],
  imports: [//aqui importo pra dentro do projeto minhas funcionalidades do cód, meus métodos
  BrowserModule,
  FormsModule //biblioteca do angular
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
