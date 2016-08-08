import {Component} from '@angular/core';
import {} from '@angular/forms';

import {FormComponent} from './form.component';

@Component({
    selector: 'my-app',
    template: `<client-form></client-form>`,
    directives: [FormComponent]
})

export class AppComponent {}
