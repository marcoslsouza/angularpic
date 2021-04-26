import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FotoFormComponent } from "./fotos/foto-form/foto-form.component";
import { FotoListComponent } from "./fotos/foto-list/foto-list.component";


const routes: Routes = [
    {path: 'user/flavio', component: FotoListComponent },
    {path: 'p/add', component: FotoFormComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}