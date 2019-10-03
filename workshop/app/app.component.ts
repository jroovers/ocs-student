import { Component } from "@angular/core";
import { ProductService } from "./services/product.service";

@Component({
    selector: 'pm-app',
    styleUrls: ['/app.component.css'],
    template: `
        <div>
            <nav class='navbar navbar-default'>
                <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                    <ul class='nav navbar-nav'>
                        <li><a [routerLink]="['/welcome']">Home</a></li>
                        <li><a [routerLink]="['/products']">Product List</a></li>
                    </ul>
                </div>
            </nav>
        </div>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
        `,
    providers: [ProductService]
})
export class AppComponent {
    pageTitle: string = `PRG Product Management`;
}