import { Pipe, PipeTransform } from "@angular/core";
import { Foto } from '../foto/foto';

@Pipe({
    name: 'filtroDescricao'
})
export class FiltroDescricao implements PipeTransform {
    transform(fotos: Foto[], descricao: string) {
       descricao = descricao.trim().toLowerCase();
       if(descricao) {
           return fotos.filter(foto => foto.description.toLowerCase().includes(descricao));
       } else {
           return fotos;
       }
    }
}