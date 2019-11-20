import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDvXBcdBEvffcFQ3_KZR0sXQpKDAYl_xf0",
    authDomain: "mario-leaderboard.firebaseapp.com",
    databaseURL: "https://mario-leaderboard.firebaseio.com",
    projectId: "mario-leaderboard",
    storageBucket: "mario-leaderboard.appspot.com",
    messagingSenderId: "526753882647",
    appId: "1:526753882647:web:ecf3b4cad8d563afccb252",
    measurementId: "G-H37KN22XCR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase