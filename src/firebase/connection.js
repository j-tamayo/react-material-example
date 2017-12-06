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

export default firebaseRef;