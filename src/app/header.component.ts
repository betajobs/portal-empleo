import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Oferta } from './lista-de-ofertas/oferta';
import { BuscadorPipe } from './buscador.pipe';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

 navegarAFormulario() {
    this.router.navigate(['formulario']);
  }

  }