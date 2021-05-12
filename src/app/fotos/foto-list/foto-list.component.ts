import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Foto } from '../foto/foto';

@Component({
    templateUrl: 'foto-list.component.html'
})
export class FotoListComponent implements OnInit, OnDestroy {
  
  // Array de Object
  fotos: Foto[] = [];
  filtro: string = '';
  debounce: Subject<string> = new Subject<string>();

  constructor(private activatedRoute: ActivatedRoute) {}
  
  ngOnInit(): void {
    // Recupera o valor de FotoListResolver
    this.fotos = this.activatedRoute.snapshot.data.fotos;

    this.debounce.pipe(debounceTime(300)).subscribe(filtro => this.filtro = filtro);
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}