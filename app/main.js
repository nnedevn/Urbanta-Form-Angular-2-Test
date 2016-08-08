"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
// TODO: Remove console clearing function after development is done.
(function () {
    var row;
    for (var i = 0; i < 30; i += 1) {
        row += "\n";
    }
    console.log(row);
})();
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms()
])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map