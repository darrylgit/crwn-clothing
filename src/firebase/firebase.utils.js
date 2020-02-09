import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyB-P1bNwM0VDupqIjGB1XiGVBhFj6QfkNE',
  authDomain: 'crwn-db-93a8f.firebaseapp.com',
  databaseURL: 'https://crwn-db-93a8f.firebaseio.com',
  projectId: 'crwn-db-93a8f',
  storageBucket: 'crwn-db-93a8f.appspot.com',
  messagingSenderId: '270496482738',
  appId: '1:270496482738:web:e37470ad3f9cf1dbef50ab',
  measurementId: 'G-FW4H81QNG0'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account ' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
