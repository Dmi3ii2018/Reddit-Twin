import React from "react";
import * as firebase from "firebase";
import { firebaseConfig } from "./firebase-config"

class App {
  constructor() {
    super();
      firebase.initializeApp(firebaseConfig);
    }
  render () {
    return <div className="App">Hellow World!</div>;
  }
}

export default App;
