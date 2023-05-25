import React from 'react';
import logo from './logo.svg';
import './App.css';
import {db} from './firebase/config.js'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { collection, doc, getDoc,setDoc,query } from "firebase/firestore";


//読み書きの参考
// https://cloud.google.com/firestore/docs/query-data/get-data?hl=ja#web-version-9


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// この状態でコレクション1にデータを追加
// const citiesRef = collection(db, "collection1");
// await setDoc(doc(citiesRef, "SF"), {
//     name: "San Francisco", state: "CA", country: "USA",
//     capital: false, population: 860000,
//     regions: ["west_coast", "norcal"] });
// await setDoc(doc(citiesRef, "LA"), {
//     name: "Los Angeles", state: "CA", country: "USA",
//     capital: false, population: 3900000,
//     regions: ["west_coast", "socal"] });
// await setDoc(doc(citiesRef, "DC"), {
//     name: "Washington, D.C.", state: null, country: "USA",
//     capital: true, population: 680000,
//     regions: ["east_coast"] });
// await setDoc(doc(citiesRef, "TOK"), {
//     name: "Tokyo", state: null, country: "Japan",
//     capital: true, population: 9000000,
//     regions: ["kanto", "honshu"] });


const docRef = doc(db, "collection1", "SF");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}



function App() {
  return (
    <div className="App">
		app
    </div>
  );
}

export default App;
