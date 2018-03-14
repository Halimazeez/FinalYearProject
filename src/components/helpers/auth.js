import { db, firebaseAuth } from "./dbCon.js";

//create a user email and password authentication
export function createUser(email, pw) {
	return firebaseAuth()
		.createUserWithEmailAndPassword(email, pw)
		.then(addUser);
}

//handle the logout
export function logout() {
	return firebaseAuth().signOut();
}

//handle the login with username and password
export function login(email, pw) {
	return firebaseAuth().signInWithEmailAndPassword(email, pw);
}

//handle reset password prompt
export function resetPassword(email) {
	return firebaseAuth().sendPasswordResetEmail(email);
}

//add's register user to database
export function addUser(user) {
	return db
		.collection(`users`)
		.add({
			email: user.email
		})
		.then(docRef => docRef)
		.catch(function(error) {
			console.error("Error adding document: ", error);
		});
}
