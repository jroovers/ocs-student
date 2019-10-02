import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './containers/app.component';
import {AuthService, AuthWidget, ChatSocket, ChatWidget} from './components/index';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent],
    /** Provide dependencies here */
    providers: [
        ChatWidget,
        AuthService,
        AuthWidget,
        ChatSocket,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
