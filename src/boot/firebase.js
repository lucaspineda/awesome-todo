import * as firebase from "firebase/app"

import "firebase/auth"
import "firebase/database"

// ADD YOUR FIREBASE CONFIG OBJECT HERE:
var firebaseConfig = {
  apiKey: "AIzaSyDUIzGkTcPIQ_0jT0ewc4MRwzrDknqaxcw",
  authDomain: "awesome-todo-892a7.firebaseapp.com",
  databaseURL: "https://awesome-todo-892a7.firebaseio.com",
  projectId: "awesome-todo-892a7",
  storageBucket: "awesome-todo-892a7.appspot.com",
  messagingSenderId: "301737886693",
  appId: "1:301737886693:web:eb1f9d7e3cdb693aac650c",
  measurementId: "G-M98KB9JTHQ"
};

let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }