import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FotoListComponent } from "./foto-list/foto-list.component";
import { FotoComponent } from "./foto/foto.component";
import { FotoService } from "./foto/foto.service";

@NgModule({
    declarations: [
        FotoComponent,
        FotoListComponent
    ],
    exports: [FotoComponent],
    imports: [
        HttpClientModule,
        // Importa as diretivas exemplo ngFor (Boa pratica importar em todos os modulos criados)
        CommonModule
    ],
    providers: [FotoService]
})
export class FotosModule {}