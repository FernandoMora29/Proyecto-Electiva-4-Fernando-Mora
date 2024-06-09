// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, 
    collection, 
    addDoc, 
    onSnapshot,
    deleteDoc,
    doc,
    getDoc,
    updateDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCB8vpcKA70qPAalorGI7bI48sd-B-hNEI",
  authDomain: "proyecto-electiva-4-f2400.firebaseapp.com",
  projectId: "proyecto-electiva-4-f2400",
  storageBucket: "proyecto-electiva-4-f2400.appspot.com",
  messagingSenderId: "820137916387",
  appId: "1:820137916387:web:a915ba20941a47183612d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

// AMIGOS - PRIMERA COLECCIÓN //

export const saveTask1 = (nombre, cedula, telefono, direccion) => 
    addDoc(collection(db, 'datos-Amigos'), {nombre, cedula, telefono, direccion})

export const onGetTasks1 = (callback) => onSnapshot(collection(db, 'datos-Amigos'), callback)

export const deleteTask1 = id => deleteDoc(doc(db, 'datos-Amigos', id))

export const getOnlyTask1 = id => getDoc(doc(db, 'datos-Amigos', id)) 

export const updateTask1 = (id, newFields) => updateDoc(doc(db, 'datos-Amigos', id), newFields);

// LISTAS - SEGUNDA COLECCIÓN //
 
const db2 = getFirestore();

export const saveTask2 = (lista, fecha, dificultad, extra) => 
  addDoc(collection(db2, 'datos-Lista'), {lista, fecha, dificultad, extra})

export const onGetTasks2 = (callback) => onSnapshot(collection(db2, 'datos-Lista'), callback)

export const deleteTask2 = id => deleteDoc(doc(db2, 'datos-Lista', id))

export const getOnlyTask2 = id => getDoc(doc(db2, 'datos-Lista', id)) 

export const updateTask2 = (id, newFields) => updateDoc(doc(db2, 'datos-Lista', id), newFields);

// LIBROS - TERCERA COLECCIÓN //

const db3 = getFirestore();

export const saveTask3 = (nombre, fecha, autor, genero, tema) => 
  addDoc(collection(db3, 'datos-Libreria'), {nombre, fecha, autor, genero, tema})

export const onGetTasks3 = (callback) => onSnapshot(collection(db3, 'datos-Libreria'), callback)

export const deleteTask3 = id => deleteDoc(doc(db3, 'datos-Libreria', id))

export const getOnlyTask3 = id => getDoc(doc(db3, 'datos-Libreria', id)) 

export const updateTask3 = (id, newFields) => updateDoc(doc(db3, 'datos-Libreria', id), newFields);

