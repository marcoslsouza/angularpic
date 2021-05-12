import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FiltroDescricao } from "./foto-list/filtro-descricao.pipe";
import { FotoListComponent } from "./foto-list/foto-list.component";
import { FotoListResolver } from "./foto-list/foto-list.resolver";
import { FotosComponent } from "./foto-list/fotos/fotos.component";
import { FotoComponent } from "./foto/foto.component";
import { FotoService } from "./foto/foto.service";

@NgModule({
    declarations: [
        FotoComponent,
        FotoListComponent,
        FotosComponent,
        FiltroDescricao
    ],
    exports: [FotoComponent],
    imports: [
        HttpClientModule,
        // Importa as diretivas exemplo ngFor (Boa pratica importar em todos os modulos criados)
        CommonModule
    ],
    providers: [FotoService, FotoListResolver]
})
export class FotosModule {}