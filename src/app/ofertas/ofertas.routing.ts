import { Routes, RouterModule } from '@angular/router';
import { OfertaItemComponent } from '../lista-de-ofertas/oferta-item.component';
import { FormularioComponent } from '../formulario/formulario.component';
import { PagInicioComponent } from '../pag-inicio/pag-inicio.component';
import { AppComponent } from '../app.component';
import { ListaDeOfertasComponent } from '../lista-de-ofertas/lista-de-ofertas.component';
import { DescripcionComponent } from '../descripcion/descripcion.component';
import { OfertasComponent } from '../ofertas/ofertas.component';

export const OFERTAS_ROUTES: Routes = [
    { path: 'formulario', component: FormularioComponent},
    { path: 'formulario/:id', component: FormularioComponent },
    { path: 'oferta-info/:id', component: DescripcionComponent },
    { path: 'oferta-item/:id', component: OfertaItemComponent },
    { path: 'oferta-item/', redirectTo: '' },
    { path: 'lista-de-ofertas', component: ListaDeOfertasComponent },
    { path: '', redirectTo: 'lista-de-ofertas', pathMatch: 'full' }

];
