import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Oferta } from '../lista-de-ofertas/oferta';
import { ServicioOfertaService } from '../lista-de-ofertas/servicio-oferta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})


export class FormularioComponent {

  miFormulario: FormGroup;
  private subscripcion: Subscription;
  private esNueva = true;
  private oferta: Oferta;
  private ofertaIndice: number;

  constructor(private formBuilder: FormBuilder, private servicioOfertaService: ServicioOfertaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.subscripcion = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.esNueva = false;
          this.ofertaIndice = params['id'];
          this.oferta = this.servicioOfertaService.getOferta(this.ofertaIndice);
        } else {
          this.esNueva = true;
          this.oferta = null;
        }
        this.inicializarMiFormulario();
      }
    );
  }
  ngOnDestroy() {
    this.subscripcion.unsubscribe();
  }

  enviarMiFormulario() {
    const ofertaNueva = this.miFormulario.value;
    if (this.esNueva) {
      this.servicioOfertaService.anadirOfertaEnviada(ofertaNueva);
    } else {
      this.servicioOfertaService.editarOferta(this.oferta, ofertaNueva);
    }
    this.volver();
  }
  cancelar() {
    this.volver();
  }

  private inicializarMiFormulario() {
    let nombreOferta = '';
    let empresaOFerta = '';
    let descripcionOferta = '';
    let ciudadOferta = '';
    let fechaPubliOferta = '';
    let imagenUrlOferta = '';
    let webOferta = '';

    let tipoDeOfertaOferta = '';
    if (!this.esNueva) {
      nombreOferta = this.oferta.nombre;
      empresaOFerta = this.oferta.empresa;
      descripcionOferta = this.oferta.descripcion;
      ciudadOferta = this.oferta.ciudad;
      fechaPubliOferta = this.oferta.fechaPubli;
      imagenUrlOferta = this.oferta.imagenUrl;
      webOferta = this.oferta.web;
      tipoDeOfertaOferta = this.oferta.tipoDeOferta;
    }
    this.miFormulario = this.formBuilder.group({

      nombre: [nombreOferta, Validators.required],
      empresa: [empresaOFerta, Validators.required],
      descripcion: [descripcionOferta, Validators.required],
      ciudad: [ciudadOferta, Validators.required],
      fechaPubli: [fechaPubliOferta, Validators.required],
      imagenUrl: [imagenUrlOferta, Validators.required],
      web: [webOferta],
      tipoDeOferta: [tipoDeOfertaOferta],
    });

  }
  private volver() {
    this.router.navigate(['/ofertas/lista-de-ofertas']);
  }

}



