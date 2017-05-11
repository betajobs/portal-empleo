import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';


export interface ComponenteCanDeactivate {
    canDeactivate: () => Observable<boolean> | boolean;
} 

export class EditarOfertaGuard implements CanDeactivate<ComponenteCanDeactivate> {
  canDeactivate(componente: ComponenteCanDeactivate): Observable<boolean> | Promise<boolean> | boolean {
    return componente.canDeactivate ? componente.canDeactivate(): true;
  }
}




