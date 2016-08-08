"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var clientForm_1 = require('./clientForm');
var FormComponent = (function () {
    function FormComponent() {
        this.services = ['Cabinets', 'Counter Tops', 'Flooring', 'Fixtures', 'Lighting', 'Decking', 'Hardware', 'Tile'];
        this.model = new clientForm_1.ClientForm('Fritz German', '123 This Str', 2061234567, 'Cabinets');
        this.submited = false;
        this.active = true;
    }
    FormComponent.prototype.onSubmit = function () {
        this.submited = true;
        console.log('submited');
    };
    FormComponent.prototype.newHero = function () {
        var _this = this;
        this.model = new clientForm_1.ClientForm('', '', 42, '');
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    Object.defineProperty(FormComponent.prototype, "diagnostic", {
        //TODO: Remove this before production
        get: function () {
            return JSON.stringify(this.model);
        },
        enumerable: true,
        configurable: true
    });
    FormComponent = __decorate([
        core_1.Component({
            selector: 'client-form',
            templateUrl: 'app/form.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map