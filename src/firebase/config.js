import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// update accordingly
const firebaseConfig = {
    apiKey: "AIzaSyBJzL8Xwvv0lcmkiGstj6fh3dBB2D3zH4Q",
    authDomain: "ecommercepptesting.firebaseapp.com",
    projectId: "ecommercepptesting",
    storageBucket: "ecommercepptesting.appspot.com",
    messagingSenderId: "325081325319",
    appId: "1:325081325319:web:6c948270a0cb3e8ac7efa2"
}

// Init Firebase 
firebase.initializeApp(firebaseConfig)

// Init Service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// Timestamp
const timestamp = firebase.firestore.Timestamp

export {projectFirestore, projectAuth, timestamp}