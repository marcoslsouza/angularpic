import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Foto } from "../foto/foto";
import { FotoService } from "../foto/foto.service";

@Injectable()
export class FotoListResolver implements Resolve<Observable<Foto[]>> {

    constructor(private service: FotoService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const userName = route.params.userName;
        // return this.service.listFromUser(userName);

        // Faz uma chamada a pagina 1 que esta definida no back-end para ter apenas 12 imagens
        return this.service.listFromUserPaginated(userName, 1);
    }
}