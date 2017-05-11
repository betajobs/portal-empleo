import { Component, OnInit, Input } from '@angular/core';
import { Oferta } from '../lista-de-ofertas/oferta';
import { ServicioOfertaService } from '../lista-de-ofertas/servicio-oferta.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
declare var swal: any;

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent implements OnInit {
  private subscription: Subscription;
  id: number;
  oferta: Oferta;
  inscripcion = false;
  bloqueo = false;
  desactivar = false;
  swal: any;
  @Input() posicion: number;

  
  constructor(private sos: ServicioOfertaService, private router: Router, private activatedRoute: ActivatedRoute) { this.subscription = activatedRoute.params.subscribe(
    (param: any) => {

   this.id = param['id'];
   this.oferta = this.sos.devolverDescripcion(this.id);
}
); 
}


//devolverDescripcion(indice: number): Oferta { 
//return this.ofertas[indice];
//}

  ngOnInit() {
      
  }

    navegarAFormulario() {

    this.router.navigate(['/ofertas/formulario', this.id ]);
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
    var thet = this.router;
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
        ).then(function(){
          thet.navigate(['/ofertas/lista-de-ofertas']);
        })
      });
  }

}
