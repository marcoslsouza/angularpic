import { Component, OnInit } from '@angular/core';
import { Foto } from './fotos/foto/foto';
import { FotoService } from './fotos/foto/foto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  /*
  Exemplo de dados em array
  fotos = [
      {
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Sultan_the_Barbary_Lion.jpg/440px-Sultan_the_Barbary_Lion.jpg',
          description: 'Leão'
      },
      {
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Lioness_Etosha_NP.jpg/500px-Lioness_Etosha_NP.jpg',
          description: 'Leoa'
      }
  ];*/

  // Array de Object
  fotos: Foto[] = [];

  constructor(private fotoService: FotoService) {
  }

  ngOnInit(): void {
    
    this.fotoService.listFromUser('flavio').subscribe(
      fotos => this.fotos = fotos
    )
  }
}
