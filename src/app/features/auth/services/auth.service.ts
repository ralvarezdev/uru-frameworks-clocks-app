import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  // Sign in with email/password
  signUp(email: string, password: string) {
    this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        // Sign up successful
        console.log('Sign up successful');
      })
      .catch((error) => {
        // An error occurred
        console.error('An error occurred: ', error);
      });
  }

  // Sign in with Google
  signInWithGoogle() {
    return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then((result) => {
      // Sign in successful
      console.log('Sign in successful');
    })
    .catch((error) => {
      // An error occurred
      console.error('An error occurred: ', error);
    });
  }

  // Sign in with email/password
  login(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password)
      .then(() => {
        // Login successful
        console.log('Login successful');
      })
      .catch((error) => {
        // An error occurred
        console.error('An error occurred: ', error);
      });
  }

  // Sign out
  logout() {
    this.afAuth.signOut()
      .then(() => {
        // Logout successful
        console.log('Logout successful');
      })
      .catch((error) => {
        // An error occurred
        console.error('An error occurred: ', error);
      });
  }

  // Check if the user is authenticated
  get isAuthenticated(): boolean {
    return this.afAuth.currentUser !== null;
  }
}
