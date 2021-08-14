// 
// Object Destructuring
// 

const person = {
    name: 'Lucas',
    age: 32,
    location: {
        city: 'Halifax',
        temp: 8
    }
};

const {name : firstName = 'Anonymous', age} = person;
// above is the same as below:
// const name = person.name;
// const age = person.age;

console.log(`${firstName} is ${age}.`);

const {city, temp: temperature} = person.location;
if (city && temperature){
    console.log(`It's ${temperature} degrees in ${city}.`);
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);

// 
// Array Destructuring
// 

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [, city, state = 'New York'] = address;
console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}.`);