/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyCGXNBS0qT-IELVvnHWBrQml4G5fV2gubc",
  authDomain: "friendlychat-1a46e.firebaseapp.com",
  projectId: "friendlychat-1a46e",
  storageBucket: "friendlychat-1a46e.appspot.com",
  messagingSenderId: "97399693487",
  appId: "1:97399693487:web:05533db7441a1bf966b45a"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}