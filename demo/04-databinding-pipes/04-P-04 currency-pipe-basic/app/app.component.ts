import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: '<p>Total price of product is {{ price | currency }}</p>'
})
export class AppComponent {
    price = 100.1234;
}
