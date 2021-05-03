import { Component, Input, OnInit } from '@angular/core';
import { Foto } from '../../foto/foto';

@Component({
    selector: 'ap-fotos',
    templateUrl: 'fotos.component.html'
})
export class FotosComponent implements OnInit {
  
  // Array de Object
 @Input() fotos: Foto[] = [];

  constructor() {
  }

  ngOnInit(): void {
    
  }
}