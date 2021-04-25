import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FotoComponent } from "./foto/foto.component";
import { FotoService } from "./foto/foto.service";

@NgModule({
    declarations: [FotoComponent],
    exports: [FotoComponent],
    imports: [HttpClientModule],
    providers: [FotoService]
})
export class FotosModule {}