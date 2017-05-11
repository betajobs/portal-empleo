import { Injectable, EventEmitter } from '@angular/core';
import { Oferta } from './oferta';

@Injectable()
export class ServicioOfertaService {
  private ofertas: Array<Oferta> = [

     new Oferta('Responsable Front-End / Maquetación', 'Gestión de proyectos (presupuesto, recepción de material, maquetación, entregas, etc). Desarrollo y mantenimiento de proyectos: maquetación de plantillas en HTML5, basadas en el diseño validado por el Cliente. Subidas al servidor. Soporte a proyectos desarrollados que necesitan ajustes de maquetación, cambios de estilos, actualizaciones a HTML5, adaptaciones a otras plataformas como el móvil, etc. Experiencia profesional en maquetación en HTML5, XHTML, CSS3, estándares W3C, accesibilidad Web (normas WAI), marcado semántico, crossbrowsing, RWD (Responsive Web Design), conocimientos básicos de JavaScript, gestión de proyectos, sublime Text 2, Photoshop, gestor documental (Documentum), validadores de código, validadores de accesibilidad, sistema de control de versiones (PlasticSCM), Office.','http://www.infojobs.net/logo/logo/do-get.xhtml?id=22313713628&dgv=8640945448931150180', 'TICTUM, Innovación y Tecnología, S.L','2017-05-10', 'Madrid, España', 'Jornada completa', 'http://tictum.com/'),
    new Oferta('Becario Marketing Digital - Prácticas', 'Right Design Agency (RDA) es un equipo multidisciplinar compuesto por arquitectos, interioristas, diseñadores y gestores inmobiliarios y de comunicación con más de 25 años diseñando, gestionando y materializando proyectos. Actualmente estamos buscando una persona en prácticas para que se encargue de mantener, desarrollar y expandir nuestra página web (www.rdadesign.es). Tendrá vía libre para hacer un lavado de imagen de la misma y de gestionar la creación y gestión de contenidos de nuestros proyectos a través de las redes sociales (actualmente Facebook e Instagram). Asimismo, se pretende incorporar nuevas secciones en la web, tales como un Blog y un catálogo de los productos que distribuimos, sin llegar a ser un ecommerce. La persona contará con el total apoyo del equipo de RDA, pero deberá ser lo suficientemente autónomo como para realizar las tareas necesarias en la reestructuración de la web. Queremos un perfil creativo, proactivo y todoterreno al que le guste proponer mejoras en la optimización de los procesos y, que en cierta medida, sea él o ella la persona que nos enseñe a nosotros.', 'https://d1ewohb620cza6.cloudfront.net/job_cover_xs/job-covers/000/049/631/49631-original.jpg?1493811169', 'Right Design Agency','2017-05-10', 'Madrid, España', 'Jornada completa','http://www.rdadesign.es/rda/'),
    new Oferta('Programador Junior (PHP&Java)', 'Para proyecto en Madrid, buscamos Programador Junior que se involucre en largo proyecto en estado de desarrollo y sus correspondientes ampliaciones. Necesitamos que tenga conocimientos mínimos de PHP, HTML5, CSS3, JQuery, maquetación Responsive, y nociones Java y Javascript. Debe ser una persona con facilidad de integración en equipos de desarrollo, positiva, alegre y que además, tenga muchas ganas de crecer en un proyecto de futuro. Ofrecemos jornada completa, salario a convenir e incorporación súper-inmediata','https://d1ewohb620cza6.cloudfront.net/user_s3_avatar_96x96/avatars/000/455/620/455620-original.jpeg?1482309556', 'RitaWanda', '2017-05-09', 'Madrid, España', 'Jornada parcial', 'http://ritawanda.com/'),
    new Oferta('Front-end Developer', 'Turijobs es el portal de empleo especializado en Turismo y Hostelería líder en España. Por ello, las mejores empresas del sector buscan nuestro apoyo para encontrar a los mejores talentos. Actualmente, buscamos a una persona con actitud proactiva y mente creativa, con experiencia en programación de front y backend, con orientación a objetivos y programación estructurada. Sus principales funciones serán desarrollar nuevas funcionalidades y mejoras de la web y construir código reutilizable y bibliotecas para uso futuro, así como asegurar la viabilidad técnica de la interfaz de usuario / diseños UX. Ofrecemos contrato indefinido y remuneración según valía del candidato. Además de formar parte de un equipo joven pero experimentado, en un sector de rápido crecimiento, con un proyecto en plena expansión y grandes retos por delante. Imprescindible tener conocimientos avanzados de .net , C#, JQuery, Javascript, HTML5/JS/CSS3. Actitud proactiva y mente creativa.','https://pbs.twimg.com/profile_images/728546380503916544/Moe-prkM.jpg', 'Turijobs','2017-05-09', 'Barcelona, España', 'tiempo completo', 'http://www.turijobs.com'),
    new Oferta('Desarrollador Front End', 'En inMediaStudio buscamos personas que quieran formar parte un equipo que disfruta con la tecnología, y cuyo objetivo principal es trabajar por y para la innovación, por eso en nuestro trabajo todos los días suponen un nuevo reto. Nuestra empresa está especializada en la creación de experiencias inmersivas mediante RV y en el desarrollo de plataformas y contenidos educativos. Nuestros proyectos requieren de creatividad, preparación y una alta dosis de entusiasmo. Si te gusta investigar, seguir aprendiendo nuevas tecnologías y deseas formar parte de un equipo que disfruta con su trabajo, este es tu sitio. Buscamos programadores Front End con al menos 2 años de experiencia programando. Valoramos conocimientos en HTML, JavaScript, Angular/Angular 2, React. Ofrecemos trabajo presencial, oferta salarial negociable, según valía y experiencia y jornada completa, viernes y verano jornada reducida.','https://d1ewohb620cza6.cloudfront.net/job_cover_xs/job-covers/000/049/165/49165-original.jpg?1492430671', 'InMediaStudio Comunicación, S.L.', '2017-05-08', 'Alcobendas, España', 'Jornada completa', 'http://inmediastudio.com/'),
    new Oferta('Jefe de Proyecto Software', 'Empresa de Software necesita incorporar un nuevo Jefe de Proyectos para desarrollar las siguientes tareas dentro del ciclo de vida de un proyecto de Software a medida: preventa: captación de requerimientos a clientes y redacción de presupuestos, dirección del equipo de desarrolladore y redacción de los análisis funcionales de los proyectos. Somos una empresa de desarrollo de Software. Proyectos a medida, e-commerce y app','http://www.infojobs.net/logo/logo/do-get.xhtml?id=17035424534&dgv=2545832607573629202', 'Simumak', '2017-05-06', 'Madrid, España', 'Jornada completa', 'http://simumak.com/es/'),
     new Oferta('Maquetador JavaScript-HTML5', 'En BABELCreativa nos encontramos en pleno proceso de crecimiento, con oportunidades laborales para personas con poca experiencia y que quieran seguir desarrollando su carrera en el mundo de la maquetación y diseño web. Buscamos Maquetadores/as con 2-4 años de experiencia en JavaScript, HTML5 y CSS3 y con nivel de inglés medio-alto para incorporarse en un interesante proyecto de nuestra compañía. Nos gustaría que le gustara trabajar en equipo y con autonomía, la maquetación y el diseño web. Y que tuviera experiencia en maquetación con JavaScript, HTML5 y CSS3 y nivel de inglés medio-alto. Deseable experiencia en JQuery, Bootstrap. Ofrecemos un entorno de trabajo joven y dinámico. Somos una empresa transparente y en crecimiento nacional e internacional. Carrera profesional y formación acorde. Contrato indefinido. Remuneración innovadora. Paquete flexible de ventajas sociales a la carta. Participación en los beneficios de la compañía. En BABEL fomentamos un entorno laboral basado en el respeto por nuestros profesionales, el desarrollo profesional y la promoción de la igualdad de oportunidades sin discriminación alguna por cuestión de género.', 'https://d1ewohb620cza6.cloudfront.net/user_s3_avatar_126x96/avatars/000/060/193/60193-original.jpg?1385034511', 'BABEL Sistemas de Información', '2017-05-04', 'Málaga, España', 'Jornada parcial', 'http://creativity.babel.es/creativity/'),
    new Oferta('Desarrollador Frontend iOS Jr', 'Se precisa incorporar un rogramador junior con experiencia en Java, JavaScript y NodeJS. Es imprescindible tener un nivel B2 mínimo de inglés. Se ofrece incorporación inmediata a empresa en continuo crecimiento; integración en un equipo de profesionales jóvenes y motivados, en un ambiente de trabajo innovador y dinámico; formación y desarrollo profesional continuo; retribución competitiva. Se garantiza la confidencialidad en el proceso de selección.','http://cdn.iphonehacks.com/wp-content/uploads/2013/10/samsung-logo.jpg', 'Samsung', '2017-05-03', 'Valencia, España', 'Jornada completa', 'http://www.samsung.com/es/'),
    new Oferta('Programador Senior CMS TRIDION y .NET', 'Requerimos incorporar una persona con experiencia en Programación en .NET y en el gestor de contenidos Tridion. Bilbao y/o Madrid. Requerido: C#, SPM, SQL y CMS Tridion.','http://www.infojobs.net/logo/logo/do-get.xhtml?id=876780150&dgv=6501052247269379676', 'EDB-Exportadora Data Base, S.A.', '2017-04-30', 'Bilbao, España', 'Jornada completa', 'http://www.edb.es/')
    
// de este apartado cogen los datos la oferta y la descripcion de la oferta
  ];

  

  constructor() { }


  anadirOfertaEnviada(oferta: Oferta) {
  this.ofertas.unshift(oferta);

}

devolverOferta(): Array<Oferta> {
  return this.ofertas;
}


devolverDescripcion(indice: number): Oferta { 
  return this.ofertas[indice];
}

eliminarOferta(oferta: Oferta) {
  var ofertaAEliminar = this.ofertas.indexOf(oferta);
  var ofertaEliminada = this.ofertas.splice(ofertaAEliminar, 1);
}
getOferta(indice: number){
  return this.ofertas[indice];


}
editarOferta(oferta: Oferta, newOferta: Oferta) {
  this.ofertas[this.ofertas.indexOf(oferta)]= newOferta;

}
}


