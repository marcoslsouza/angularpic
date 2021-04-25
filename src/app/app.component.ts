import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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
  fotos: Object[] = [];

  constructor(http: HttpClient) {
    // Recebe um array de Object da URL
    http
      .get<Object[]>('http://localhost:3000/flavio/photos')
      .subscribe(
        fotos => this.fotos = fotos
      )
  }
}
