// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, onSnapshot, query } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { dispatch } from "../store";
import { navigate } from "../store/Actions";
import { Screens } from "../types/screenstypes";
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
  measurementId: "G-JB4FS3Q6E2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log(uid);
    dispatch(navigate(Screens.DASHBOARD));

    // ...
  } else {
    // User is signed out
    // ...
    dispatch(navigate(Screens.LOGIN));
    console.log("No.");
  }
});

export const register = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<boolean> => {
  try {
    const Usercredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(Usercredential.user);
    return true;
  } catch (error) {
    return false;
  }
};
export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<boolean> => {
  try {
    const Userlogin = await signInWithEmailAndPassword(auth, email, password);
    return true;
  } catch (error) {
    return false;
  }
};

const closeSession = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(error);
  }
};

export const addPost = async (post: any) => {
  try {
    const where = collection(db, "Bands");
    await addDoc(where, post);
  } catch (error) {
    console.error(error);
  }
};
export const getBands = async () => {
  const querySnapshot = await getDocs(collection(db, "Bands"));
  const transformed: any = [];

  querySnapshot.forEach((doc: any) => {
    const data = doc.data();
    transformed.push({ id: doc.id, ...data });
  });

  return transformed;
};
export const addfriend = async (post: any) => {
  try {
    const where = collection(db, "Friends");
    await addDoc(where, post);
  } catch (error) {
    console.error(error);
  }
};
export const gettickets = async () => {
  const querySnapshot = await getDocs(collection(db, "tickets"));
  const transformed: any = [];

  querySnapshot.forEach((doc: any) => {
    const data = doc.data();
    transformed.push({ id: doc.id, ...data });
  });
  return transformed;
};

export const getfriend = async () => {
  const querySnapshot = await getDocs(collection(db, "Friends"));
  const transformed: any = [];

  querySnapshot.forEach((doc: any) => {
    const data = doc.data();
    transformed.push({ id: doc.id, ...data });
  });

  return transformed;
};
export const addconcerts = async (post: any) => {
  try {
    const where = collection(db, "concerts");
    await addDoc(where, post);
  } catch (error) {
    console.error(error);
  }
};
export const addcpost = async (post: any) => {
  try {
    const where = collection(db, "Friends");
    await addDoc(where, post);
  } catch (error) {
    console.error(error);
  }
};
export const getconcerts = async () => {
  const querySnapshot = await getDocs(collection(db, "concerts"));
  const transformed: any = [];

  querySnapshot.forEach((doc: any) => {
    const data = doc.data();
    transformed.push({ id: doc.id, ...data });
  });

  return transformed;
};

const q = query(collection(db, "Friends"));

const listener = onSnapshot(q, (querySnapshot) => {
  const newComments: any = [];
  querySnapshot.forEach((doc) => {
    newComments.push(doc.data());
  });
  return newComments;
});

console.log(listener);

export default {
  getBands,
  getDocs,
  addfriend,
  getfriend,
  addconcerts,
  getconcerts,
  gettickets,
  register,
  login,
  addcpost,
  closeSession,
  listener
};
