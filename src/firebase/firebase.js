import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAaV8oDmnAXQj1P3FUVZhIxspKz6L3CjdQ",
    authDomain: "expensify-a4972.firebaseapp.com",
    databaseURL: "https://expensify-a4972-default-rtdb.firebaseio.com",
    projectId: "expensify-a4972",
    storageBucket: "expensify-a4972.appspot.com",
    messagingSenderId: "657414327694",
    appId: "1:657414327694:web:e58c4467b40dead017e8df"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref().set({
    name: 'Lucas MacKenzie',
    age: 32,
    isSingle: false,
    location: {
        city: 'Halifax',
        province: 'Nova Scotia',
        country: 'Canada'
    }
});

// database.ref().set('This is my data.');

database.ref('age').set(33);
database.ref('location/city').set('Montague');

database.ref('attributes').set({
    height: 67,
    weight: 149
});

console.log('I made a change to the data.');