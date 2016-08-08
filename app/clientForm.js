"use strict";
var ClientForm = (function () {
    function ClientForm(clientName, clientAddress, clientPhoneNumber, 
        // public clientEmail: string,
        // public appointmentWith: string,
        // public typeOfProject: string,
        interstedIn) {
        this.clientName = clientName;
        this.clientAddress = clientAddress;
        this.clientPhoneNumber = clientPhoneNumber;
        this.interstedIn = interstedIn;
    }
    return ClientForm;
}());
exports.ClientForm = ClientForm;
// the question mark signifies an optional parameter. A required parameter cannot follow an optional parameter.
//# sourceMappingURL=clientForm.js.map