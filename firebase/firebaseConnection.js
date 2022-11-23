
import firebase, { initializeApp }  from "firebase/app";
import 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXeBfJakrBKWDs2pRINoJAGuZ8opT9xUs",
  authDomain: "trafficfunctionbdv1.firebaseapp.com",
  databaseURL: "https://trafficfunctionbdv1-default-rtdb.firebaseio.com",
  projectId: "trafficfunctionbdv1",
  storageBucket: "trafficfunctionbdv1.appspot.com",
  messagingSenderId: "304804171105",
  appId: "1:304804171105:web:6ab1be88b47c520b528920"
};  
// Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
    }
    export default firebase;