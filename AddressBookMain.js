
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

        this.setFirstName = function(firstName) {
            this.firstName = firstName;
        }

        this.setLastName = function(lastName) {
            this.lastName = lastName;
        }

        this.setAddess = function(address) {
            this.address = address;
        }

        this.setCity = function(city) {
            this.city = city;
        }

        this.setZip = function(zip) {
            this.zip = zip;
        }

        this.setPhone = function(phone){
            this.phone = phone;
        }

        this.setEmail = function(email){
            this.email = email;
        }

        this.setState = function(state){
            this.state = state;
        }
    }


    displayWelcome() {
        console.log("Welcome to Address Book");
    }

    createDetails() {

        let data = `First Name: ${this.firstName}\nLast Name: ${this.lastName}\nAddress: ${this.address}\nCity: ${this.city}\nState: ${this.state}\nZip: ${this.zip}\nPhone: ${this.phone}\nEmail: ${this.email}\n\n\n`;

        fs.appendFile('addressBook.txt', data, (error) => {
            if (error) {
                console.log("Error in writing file");
            } else {
                console.log("Data written successfully");
            }
        });
    }

    static getAllDetails() {
        fs.readFile('addressBook.txt', 'utf8', (error, data) => {
            if (error) {
                console.log("Error in reading file " + error.message);
            } else {
                console.log(data);
            }
        })
    }

    updateDetails() {
        
        this.deleteDetails();

        this.setFirstName("Alex");
        this.setLastName("Sins");
        this.setAddess("NYC");
        this.setEmail("alex@gmail.com");
        this.setCity("New York");
        this.setZip(10001);
        this.setPhone(1234567890);
        this.setState("Ohio");

        setTimeout(()=>{
            this.createDetails();
        }, 2000);
    }



    deleteDetails() {
        let email = this.email;

        fs.readFile('addressBook.txt', 'utf8', (error, data) => {
            if (error) {
                console.log("Error in reading file " + error.message);
                return;
            }

            let dataArray = data.split('\n\n\n');
            let newData = dataArray
                            .filter((data) => !data.includes(email))
                            .join('\n\n\n');
                            fs.writeFile('addressBook.txt', newData, (error) => {
                                if (error) {
                                    console.log("Error in writing file " + error.message);
                                } else {
                                    console.log("new Data written successfully");
                                }
                            });
            
                        });
    }



}

let addressBook1 = new AddressMainBook("Rahul", "Kumar", "Kankarbagh", "Patna", "Bihar", 800020, 1234567890, "kethan@yahoo.com");
let addressBook2 = new AddressMainBook("Alex", "sins", "Kankarbagh", "Patna", "Bihar", 800020, 1234567890, "dummy@yahoo.com");
let addressBook3 = new AddressMainBook("Rahul", "Kumar", "Kankarbagh", "Patna", "Bihar", 800020, 1234567890, "random@gmail.com");
let addressBook4 = new AddressMainBook("Rahul", "Kumar", "Kankarbagh", "Patna", "Bihar", 800020, 1234567890, "me@man.com");
let addressBook5 = new AddressMainBook("Rahul", "Kumar", "Kankarbagh", "Patna", "Bihar", 800020, 1234567890, "hello@yahoo.com");

// addressBook1.createDetails();
// addressBook2.createDetails();
// addressBook3.createDetails();
// addressBook4.createDetails();
// addressBook5.createDetails();

// AddressMainBook.getAllDetails();

addressBook4.updateDetails();

// addressBook4.deleteDetails();
