import {Injectable} from '@angular/core';

@Injectable()
export class SimpleService {
    someMethod() {
        return 'Hello from Shared Simple Service';
    }
}
