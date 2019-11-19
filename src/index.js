import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAHh8D3sVAUztD4izgYthULQAVRNHsmZWI",
    authDomain: "trivia-mario.firebaseapp.com",
    databaseURL: "https://trivia-mario.firebaseio.com",
    projectId: "trivia-mario",
    storageBucket: "trivia-mario.appspot.com",
    messagingSenderId: "1013685039464",
    appId: "1:1013685039464:web:f9a9812d7bc37ce65566dd",
    measurementId: "G-G92PMGEEPK"
};
firebase.initializeApp(firebaseConfig)

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
