import { Routes } from '@angular/router';
import { ListaDeOfertasComponent } from '../lista-de-ofertas/lista-de-ofertas.component';
import { PagInicioComponent } from '../pag-inicio/pag-inicio.component';
import { InicioOfertaGuard } from './inicio-oferta.guard';


export const INICIO_ROUTES: Routes = [
   { path: 'inicio', component: ListaDeOfertasComponent, canActivate: [InicioOfertaGuard] },
];
