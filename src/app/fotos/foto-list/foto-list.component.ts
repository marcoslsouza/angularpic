import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Foto } from '../foto/foto';
import { FotoService } from '../foto/foto.service';

@Component({
    templateUrl: 'foto-list.component.html'
})
export class FotoListComponent implements OnInit, OnDestroy {
  
  // Array de Object
  fotos: Foto[] = [];
  filtro: string = '';
  debounce: Subject<string> = new Subject<string>();

  temMais: boolean = true;
  currentPage: number = 1;
  userName: string = '';

  constructor(private activatedRoute: ActivatedRoute, private fotoService: FotoService) {}
  
  ngOnInit(): void {

    // Recupera o userName passado na rota
    this.userName = this.activatedRoute.snapshot.params.userName;

    // Recupera o valor de FotoListResolver, passado na rota app-routing.modules.ts
    this.fotos = this.activatedRoute.snapshot.data.fotos;

    this.debounce.pipe(debounceTime(300)).subscribe(filtro => this.filtro = filtro);
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  load() {
    // Pagina atual ja e passada pelo foto-list.resolver.ts como 1. Logo aqui ira fazer com que a proxima sera 2
    this.fotoService.listFromUserPaginated(this.userName, ++this.currentPage).subscribe(
      fotos => {
        this.fotos = this.fotos.concat(fotos);
        if(!fotos.length) {
          this.temMais = false;
          console.log(fotos);
        }
      }
    );
  }
}