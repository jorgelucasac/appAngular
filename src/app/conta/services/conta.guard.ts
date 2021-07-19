import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageUtils } from 'src/app/utils/localstorage';
import { CadastroComponent } from '../cadastro/cadastro.component';

@Injectable()
export class ContaGuard implements CanDeactivate<CadastroComponent>, CanActivate {

  localStorage = new LocalStorageUtils();

  constructor(private router: Router) { }

  canDeactivate(component: CadastroComponent) {
    if (component.mudancasNaoSalvas) {
      return window.confirm('Você possui mudançãs não salvas! \nDeseja realmente sair?');
    }
    return true;
  }

  canActivate() {
    if (this.localStorage.obterTokenUsuario()) {
      this.router.navigate(['/home']);
    }
    return true;
  }

}
