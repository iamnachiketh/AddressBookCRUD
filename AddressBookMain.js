
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

    createDetails(){
        
        let data = `First Name: ${this.firstName}\nLast Name: ${this.lastName}\nAddress: ${this.address}\nCity: ${this.city}\nState: ${this.state}\nZip: ${this.zip}\nPhone: ${this.phone}\nEmail: ${this.email}\n\n\n`;

        fs.appendFile('addressBook.txt', data,(error)=>{
            if(error){
                console.log("Error in writing file");
            }else{
                console.log("Data written successfully");
            }
        });
    }

}

let addressBook1 = new AddressMainBook("Rahul", "Kumar", "Kankarbagh", "Patna", "Bihar", 800020, 1234567890, "kethan@yahoo.com");

addressBook1.createDetails();
