import {RouterModule, Routes} from '@angular/router';
import ComponentOne from './component-one';
import ComponentTwo from './component-two';

export const routes: Routes = [
    {path: '', redirectTo: 'component-one', pathMatch: 'full'},
    {path: 'component-one', component: ComponentOne},
    {path: 'component-two/:id', component: ComponentTwo}
];

export const appRoutingProviders: any[] = [];


//export const routing = RouterModule.forRoot(routes);
export const routing = RouterModule.forRoot(routes, {enableTracing: true, useHash: true});
