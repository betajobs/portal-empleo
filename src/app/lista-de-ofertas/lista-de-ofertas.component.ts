import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Oferta } from './oferta';
import { Router } from '@angular/router';
import { ServicioOfertaService } from './servicio-oferta.service';

@Component({
  selector: 'app-lista-de-ofertas',
  templateUrl: './lista-de-ofertas.component.html',
  styleUrls: ['./lista-de-ofertas.component.css']

})
export class ListaDeOfertasComponent implements OnInit {

  ofertas: Array<Oferta> = [];

  

  constructor(private servicioOfertaService: ServicioOfertaService, private router: Router) { }

  ngOnInit() {
    this.ofertas = this.servicioOfertaService.devolverOferta();
  }

 anadirOferta(oferta: Oferta){
  this.servicioOfertaService.anadirOfertaEnviada(oferta);
  this.servicioOfertaService.devolverOferta();

 }
}

