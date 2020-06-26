import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBkWIgJeGqc5unvAPHfXNXjPOlQti5-aUE",
  authDomain: "hackathon-dev2020.firebaseapp.com",
  databaseURL: "https://hackathon-dev2020.firebaseio.com",
  projectId: "hackathon-dev2020",
  storageBucket: "hackathon-dev2020.appspot.com",
  messagingSenderId: "739471949",
  appId: "1:739471949:web:9aee5beb6b14f4baeca204",
  measurementId: "G-NR0G2XFMNG"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
