import { Routes, RouterModule } from '@angular/router';
import { OfertaItemComponent } from './lista-de-ofertas/oferta-item.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PagInicioComponent } from './pag-inicio/pag-inicio.component';
import { OFERTAS_ROUTES } from './ofertas/ofertas.routing';
import { AppComponent } from './app.component';
import { ListaDeOfertasComponent } from './lista-de-ofertas/lista-de-ofertas.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { OfertasComponent } from './ofertas/ofertas.component';

const APP_ROUTES: Routes = [
    { path: '', component: PagInicioComponent },
    { path: 'ofertas', component: OfertasComponent, children: OFERTAS_ROUTES }
];

export const ROUTING = RouterModule.forRoot(APP_ROUTES);
