import {bootstrap} from '@angular/platform-browser-dynamic';
import {disableDeprecatedForms, provideForms} from '@angular/forms';

import {AppComponent} from './app.component';

// TODO: Remove console clearing function after development is done.
(function () {
    let row: string;

    for (let i = 0; i < 30; i+=1) {
        row += "\n";
    }
    console.log(row)
})();


bootstrap(AppComponent, [
    disableDeprecatedForms(),
    provideForms()
])
    .catch((err: any)=> console.log(err));