import * as firebase from 'firebase';
require("firebase/firestore");
import Config from './app';

var FbApp = firebase.initializeApp(Config.firebaseConfig);
module.exports = FbApp;