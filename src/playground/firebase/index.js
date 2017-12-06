import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDBvYxq9tzTLoL8UCHEhRgoOZqFDvNzrh0",
    authDomain: "mylybrary-42043.firebaseapp.com",
    databaseURL: "https://mylybrary-42043.firebaseio.com",
    projectId: "mylybrary-42043",
    storageBucket: "mylybrary-42043.appspot.com",
    messagingSenderId: "153011550619"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
    appName: 'MaterialApp',
    isRunning: true,
    user: {
        name: 'Junior',
        age: 25
    },
});

var notesRef = firebaseRef.child('notes');

var newNoteRef = notesRef.push();
newNoteRef.set({
    text: 'Walk the dog'
});

// firebaseRef.child('user').set({
//     name: 'Miriam'
// });

// firebaseRef.update({
//     isRunning: false,
//     'user/name': 'Miriam'
// });

// firebaseRef.child('user/age').remove();

// firebaseRef.once('value').then((snapshot) => {
//     console.log(snapshot.val())
// }, (e) => {
//     console.log('Unable to fetch value', e);
// });

// firebaseRef.on('value', (snapshot) => {
//     console.log('Got value', snapshot.val());
// });

// firebaseRef.off();

// firebaseRef.update({
//     isRunning: false
// });




