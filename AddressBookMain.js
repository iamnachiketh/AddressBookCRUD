
const fs = require('fs');

class AddressMainBook {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {

        this.firstName = firstName;

        this.lastName = lastName;

        this.address = address;

        this.city = city;

        this.state = state;

        this.zip = zip;

        this.phone = phone;

        this.email = email;
    }


    displayWelcome() {
        console.log("Welcome to Address Book");
    }
}
