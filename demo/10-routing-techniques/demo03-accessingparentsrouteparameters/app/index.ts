import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {appRoutingProviders, routing} from './app.routes';
import ComponentOne from './component-one';
import ComponentTwo from './component-two';
import ChildOne from './child-one';
import ChildTwo from './child-two';

@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [
        AppComponent,
        ComponentOne,
        ComponentTwo,
        ChildOne,
        ChildTwo
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
