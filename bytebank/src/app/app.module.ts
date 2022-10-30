import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { novaTransferenciaComponent } from './nova-transferencia/Nova-transferencia.component';
import { FormsModule } from '@angular/forms';
import { ExtratoComponent } from './extrato/extrato.component';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';



//função para registrar o local
registerLocaleData(localePt, 'pt');//id pt

//página para declarar os componentes por módulos. Sendo a porta de entrada da aplicação
//o arquivo index.html, que chama o app.component e ele só é reconhecido pois faz parte do app.module
@NgModule({
  //local onde todos os componentes são declarados
  declarations: [
    AppComponent,novaTransferenciaComponent,ExtratoComponent //declarado automaticamente com o comando ng generate
],
  imports: [//Bibliotecas onde aqui importo pra dentro do projeto minhas funcionalidades do cód, meus métodos.
  BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [
    //INJEÇÃO DE DEPENDÊNCIAS: Coisas que vao ser instaciadas no momento que app rodar.
    { provide: LOCALE_ID, useValue: 'pt' },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
