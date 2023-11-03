// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  
import { collection,addDoc,getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA90m5UOZt4bH1ndXVmKjGGgetrAPAn4Gc",
  authDomain: "fanground-5a809.firebaseapp.com",
  projectId: "fanground-5a809",
  storageBucket: "fanground-5a809.appspot.com",
  messagingSenderId: "806046047403",
  appId: "1:806046047403:web:b263215136ddd1d8ad6bee",
  measurementId: "G-JB4FS3Q6E2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export const addPost = async (post: any) => {
  try{
      const where = collection(db, "Bands")
      await addDoc(where, post)
  } catch (error) {
      console.error(error)
  }
}
export const getPost = async () => {
  const querySnapshot = await getDocs(collection(db, "Bands"));
  const transformed: any = [];

  querySnapshot.forEach((doc: any) => {
      const data = doc.data();
      transformed.push({id: doc.id, ...data})
  });

  return transformed;
}

console.log(addPost);
