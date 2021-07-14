import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { ContaAppComponent } from './conta.app.component';
import { ContaRoutingModule } from './conta.route';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ContaAppComponent,
    CadastroComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    //para formulários
    FormsModule,
    ReactiveFormsModule,

    //para services
    HttpClientModule,

    //criados
    ContaRoutingModule
  ]
})
export class ContaModule { }
