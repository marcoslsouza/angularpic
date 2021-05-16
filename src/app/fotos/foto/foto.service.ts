import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Foto } from "./foto";

// @Injectable({provided:In: 'root'}) (Aqui ou no modulo | root disponivel para todo o angular)
@Injectable()
export class FotoService {

    constructor(private http: HttpClient) {

    }

    // Teste: http://localhost:4200/user/nome-usuario
    listFromUser(userName: string) {

        // Recebe um array de Object da URL
        // http://localhost:3000/nome-usuario/photos
        return this.http
        .get<Foto[]>('http://localhost:3000/'+ userName +'/photos');
    }

    // Teste: http://localhost:4200/user/nome-usuario
    listFromUserPaginated(userName: string, page: number) {

        // Cria o parametro para ser passado na URL
        const params = new HttpParams().append('page', page.toString());

        // Recebe um array de Object da URL
        // http://localhost:3000/nome-usuario/photos?page=1
        return this.http
        .get<Foto[]>('http://localhost:3000/'+ userName +'/photos', { params });
    }
}