import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProdutoService } from '../services/produto.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html'
})
export class ListaComponent implements OnInit {

  imagensUrl: string = environment.imagensUrl;
  public produtos: Produto[];
  errorMessage: string;

  constructor(private produtoService: ProdutoService, private spinner: NgxSpinnerService) {
    this.spinner.show();
  }

  ngOnInit(): void {
    this.produtoService.obterTodos()
      .subscribe(
        produtos => {
          this.produtos = produtos;
          this.spinner.hide();
        },
        error => {
          this.errorMessage;
          this.spinner.hide();
        });
  }
}
