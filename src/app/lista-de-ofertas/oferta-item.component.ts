import { Component, OnInit, Input } from '@angular/core';
import { Oferta } from './oferta';
import { Router } from '@angular/router';
import { ServicioOfertaService } from './servicio-oferta.service';
declare var swal: any;

@Component({
  selector: 'app-oferta-item',
  templateUrl: './oferta-item.component.html',
  styleUrls: ['./oferta-item.component.css']
})

export class OfertaItemComponent implements OnInit {


  @Input() oferta: Oferta;
  @Input() posicion: number;
  @Input() ofertaAnadida: Oferta;

  items: Array<Oferta> = [];
  inscripcion = false;
  bloqueo = false;
  desactivar = false;
  swal: any;

  constructor(private sos: ServicioOfertaService, private router: Router) { }

  ngOnInit() {
    this.items = this.sos.devolverOferta();
  }


  navegarAFormulario() {
    this.router.navigate(['/ofertas/formulario', this.posicion]);
  }

  aplicar() {
    this.inscripcion = true;
  }

  bloquear() {
    this.desactivar = true;
    this.bloqueo = true;
  }

  eliminar(oferta: Oferta) {
    var that = this.sos;
   swal({
      title: '¿Estás seguro?',
      text: 'La oferta se eliminará para siempre',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, quiero borrarla',
      cancelButtonText: 'Cancelar'
    }).then(function() {
      that.eliminarOferta(oferta);
        swal(
        '¡Oferta eliminada!',
        'La oferta se ha eliminado correctamente',
        'success'
        )
      });
  }
  }
