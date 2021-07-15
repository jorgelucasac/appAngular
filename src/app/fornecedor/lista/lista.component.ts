import { Component, OnInit } from '@angular/core';
import { FornecedorService } from '../services/fornecedor.service';
import { Fornecedor } from '../models/fornecedor';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html'
})
export class ListaComponent implements OnInit {

  public fornecedores: Fornecedor[];
  errorMessage: string;

  constructor(private fornecedorService: FornecedorService, private spinner: NgxSpinnerService) {
    this.spinner.show();
  }

  ngOnInit(): void {

    this.fornecedorService.obterTodos()
      .subscribe(
        fornecedores => {
          this.fornecedores = fornecedores
          this.spinner.hide();
        },
        error => {
          this.errorMessage
          this.spinner.hide();
        });

  }
}
