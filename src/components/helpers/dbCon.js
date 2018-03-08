import firebase from "firebase";
// Required for side-effects
require("firebase/firestore");

const config = {
	apiKey: "AIzaSyChOYf1MinZZ50pfIR_5zgeSnNNP5QarmU",
	authDomain: "react-5c622.firebaseapp.com",
	databaseURL: "https://react-5c622.firebaseio.com",
	projectId: "react-5c622",
	storageBucket: "react-5c622.appspot.com",
	messagingSenderId: "971537524613"
};

firebase.initializeApp(config);

export const db = firebase.firestore();
export const firebaseAuth = firebase.auth;
