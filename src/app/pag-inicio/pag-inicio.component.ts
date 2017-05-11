import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListaDeOfertasComponent } from '../lista-de-ofertas/lista-de-ofertas.component';

@Component({
  selector: 'app-pag-inicio',
  templateUrl: './pag-inicio.component.html',
  styleUrls: ['./pag-inicio.component.css']
})
export class PagInicioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navegarAOfertas() {
    this.router.navigate(['ofertas']);
  }
}
