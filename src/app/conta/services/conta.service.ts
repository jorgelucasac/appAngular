import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Usuario } from "../models/usuario";
import { map, catchError } from 'rxjs/operators'
import { BaseService } from "src/app/service/base.service";

@Injectable()
export class ContaService extends BaseService {

  constructor(private httpClient: HttpClient) {
    super();
  }

  registrarUsuario(usuario: Usuario) {
    var response = this.httpClient
      .post(`${this.UrlServiceV1}nova-conta`, usuario, this.ObterHeaderJson())
      .pipe(
        map(this.extractData),
        catchError(this.serviceError)
      );

    return response;
  }

  login(usuario: Usuario) {

  }
}