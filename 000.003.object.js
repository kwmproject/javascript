
        let person = {
            firstName: "John",
            lastName: "Walker"
        };
        // dot notation
        console.log(person.firstName); // "John"
        console.log(person.lastName); // "Walker"

        // bracket notation
        console.log(person["firstName"]); // "John"
        console.log(person["lastName"]); // "Walker"

        let address = {
            'building no': 3960,
            street: "Freedom St",
            city: "San Diego",
            state: "CA",
            zip: "92105"
        };
        console.log(address['building no']);
        console.log(address.building no);