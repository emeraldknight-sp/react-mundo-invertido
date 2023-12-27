import { FirebaseApp, initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";

export const app: FirebaseApp = initializeApp(firebaseConfig);
