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

//set register user to database with the userid as doc reference
export function addUser(user) {
  return db
    .collection("users")
    .doc(user.uid)
    .set({
      email: user.email,
      //uid: user.uid,
      ohp: 0,
      bench: 0,
      squat: 0,
      dead: 0
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
}
