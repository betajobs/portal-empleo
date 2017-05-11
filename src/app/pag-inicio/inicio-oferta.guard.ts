import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';


export interface ComponenteCanDeactivate {
    canDeactivate: () => Observable<boolean> | boolean;
}

export class InicioOfertaGuard implements CanDeactivate <ComponenteCanDeactivate> {
  canDeactivate(componente: ComponenteCanDeactivate): Observable<boolean> | Promise<boolean> | boolean {
    return componente.canDeactivate ? componente.canDeactivate(): true;
  }
}
