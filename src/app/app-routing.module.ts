import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./errors/not-found.component";
import { FotoFormComponent } from "./fotos/foto-form/foto-form.component";
import { FotoListComponent } from "./fotos/foto-list/foto-list.component";
import { FotoListResolver } from "./fotos/foto-list/foto-list.resolver";

const routes: Routes = [
    {path: 'user/:userName', component: FotoListComponent, resolve: { fotos: FotoListResolver } },
    {path: 'p/add', component: FotoFormComponent },
    {path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ] // Exporta para que router-outlet em app.component seja reconhecido
})
export class AppRoutingModule {

}