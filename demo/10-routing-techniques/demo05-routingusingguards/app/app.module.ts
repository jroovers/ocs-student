import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {appRoutingProviders, routing} from './app.routes';

import AppComponent from './app.component.js';
import ComponentOne from './component-one';
import ComponentTwo from './component-two';
import ActivateGuard from './activate-guard';
import DeactivateGuard from './deactivate-guard';


@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [
        AppComponent,
        ComponentOne,
        ComponentTwo
    ],
    providers: [
        appRoutingProviders,
        ActivateGuard,
        DeactivateGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
