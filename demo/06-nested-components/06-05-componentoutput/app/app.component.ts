import {Component, OnChange} from '@angular/core';

@Component({
    selector: 'app-component',
    templateUrl: 'app/app.component.html'
})
export class AppComponent implements OnChange {
    num = 1;
    parentCount = 0;

    ngOnChange(val: number) {
        this.parentCount = val;
    }
}
