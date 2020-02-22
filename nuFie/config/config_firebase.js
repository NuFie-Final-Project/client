import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAQUG7bgLfBKH8rEFqnOr78wgzC0WjAbA8",
    authDomain: "nufie-2de4f.firebaseapp.com",
    databaseURL: "https://nufie-2de4f.firebaseio.com",
    projectId: "nufie-2de4f",
    storageBucket: "nufie-2de4f.appspot.com",
    messagingSenderId: "593235535144",
    appId: "1:593235535144:web:bc6d3b339aa36c85059c1d",
    measurementId: "G-9844J07JXK"
};

firebase.initializeApp(firebaseConfig)

export default firebase