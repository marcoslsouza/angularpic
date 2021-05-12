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
        return this.service.listFromUser(userName);
    }
}