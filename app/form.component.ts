import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

import {ClientForm} from './clientForm';

@Component({
    selector: 'client-form',
    templateUrl: 'app/form.component.html'
    //  styleUrls: ['app/form.css']
})
export class FormComponent {

    services = ['Cabinets', 'Counter Tops', 'Flooring', 'Fixtures', 'Lighting', 'Decking', 'Hardware', 'Tile'];

    model = new ClientForm('Fritz German', '123 This Str', 2061234567, 'Cabinets');

    submited = false;

    active = true;

    onSubmit() {
        this.submited = true;
        console.log('submited');
    }

    newHero() {
        this.model = new ClientForm('', '', 42, '')

        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    //TODO: Remove this before production
    get diagnostic() {
        return JSON.stringify(this.model);
    }
}

