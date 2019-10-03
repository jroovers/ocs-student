import { Component } from "@angular/core";
import { ProductService } from "./services/product.service";

@Component({
    selector: 'pm-app',
    styleUrls: ['/app.component.css'],
    template: `
        <div><h1>{{pageTitle}}</h1>
            <pm-products></pm-products>
        </div>
        `,
    providers: [ProductService]
})
export class AppComponent {
    pageTitle: string = `PRG Product Management`;
}