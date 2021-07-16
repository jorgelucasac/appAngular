import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { ErrorInterceptor } from './service/error.handler.service';

import { ToastrModule } from 'ngx-toastr';


export const httpInterceptorProviders = [
  //registra para todas a classes que utilizam HTTP_INTERCEPTORS
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    //modulos criados
    NavegacaoModule,

    //terceiros
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [
    //criados
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
