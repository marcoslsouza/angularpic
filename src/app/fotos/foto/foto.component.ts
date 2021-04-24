import { Component, Input } from '@angular/core';

@Component({
    selector: 'ap-foto',
    templateUrl: 'foto.component.html'
})
export class FotoComponent {
    @Input() description = '';
    @Input() url = '';
}