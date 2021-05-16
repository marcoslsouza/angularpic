import { Component, Input } from "@angular/core";

@Component({
  selector: 'ap-load-buttom',
  templateUrl: 'load-button.component.html'
})
export class LoadButtonComponent {

  @Input() temMais: boolean = true;


}