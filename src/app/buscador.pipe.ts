import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscador',
  pure: false
})

export class BuscadorPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value.length === 0) {
      return value;
    }
    var resultArray = [];
    for (var item of value) {
      if (item.nombre.toLowerCase().replace(/á/gi,"a").replace(/é/gi,"e").replace(/í/gi,"i").replace(/ó/gi,"o").replace(/ú/gi,"u").match('^.*' + args.toLowerCase().replace(/á/gi,"a").replace(/é/gi,"e").replace(/í/gi,"i").replace(/ó/gi,"o").replace(/ú/gi,"u")
 + '.*$') || item.descripcion.toLowerCase().replace(/á/gi,"a").replace(/é/gi,"e").replace(/í/gi,"i").replace(/ó/gi,"o").replace(/ú/gi,"u").match('^.*' + args.toLowerCase().replace(/á/gi,"a").replace(/é/gi,"e").replace(/í/gi,"i").replace(/ó/gi,"o").replace(/ú/gi,"u") + '.*$') || item.empresa.toLowerCase().replace(/á/gi,"a").replace(/é/gi,"e").replace(/í/gi,"i").replace(/ó/gi,"o").replace(/ú/gi,"u").match('^.*' + args.toLowerCase().replace(/á/gi,"a").replace(/é/gi,"e").replace(/í/gi,"i").replace(/ó/gi,"o") + '.*$') || item.ciudad.toLowerCase().replace(/á/gi,"a").replace(/é/gi,"e").replace(/í/gi,"i").replace(/ó/gi,"o").replace(/ú/gi,"u").match('^.*' + args.toLowerCase().replace(/á/gi,"a").replace(/é/gi,"e").replace(/í/gi,"i").replace(/ó/gi,"o").replace(/ú/gi,"u") + '.*$')) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
