import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NotFoundComponent } from "./not-found.component";

@NgModule({
    declarations: [
        NotFoundComponent
    ],
    exports: [],
    imports: [
        // Importa as diretivas exemplo ngFor (Boa pratica importar em todos os modulos criados)
        CommonModule
    ],
    providers: []
})
export class ErrorsModule {}