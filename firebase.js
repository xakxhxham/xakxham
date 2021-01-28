import firebase from 'firebase/app';
import 'firebase/auth'
  var firebaseConfig = {
    apiKey: "AIzaSyBgiusCIPVugx36mJ0WBv4VRd_Xf3Zbvbw",
    authDomain: "opbb-79264.firebaseapp.com",
    projectId: "opbb-79264",
    storageBucket: "opbb-79264.appspot.com",
    messagingSenderId: "983146812964",
    appId: "1:983146812964:web:0c74f6d90e3f3a0e6a6ab1",
    measurementId: "G-SLK83VB4NC"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export const auth = firebase.auth();
  export const provider=firebase.auth.
