import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCuZz-nVbPehOTGTSililpGghNsNy1no_c",
  authDomain: "revents-216601.firebaseapp.com",
  databaseURL: "https://revents-216601.firebaseio.com",
  projectId: "revents-216601",
  storageBucket: "revents-216601.appspot.com",
  messagingSenderId: "926415271521"
};

firebase.initializeApp(firebaseConfig);
// firebase.firestore();
const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
};
firestore.settings(settings);

export default firebase;
