import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Foto } from '../foto/foto';

@Component({
    templateUrl: 'foto-list.component.html'
})
export class FotoListComponent implements OnInit {
  
  // Array de Object
  fotos: Foto[] = [];
  filtro: string = '';

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // Recupera o valor de FotoListResolver
    this.fotos = this.activatedRoute.snapshot.data.fotos;
  }
}