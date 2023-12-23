import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { FormDataProps } from "../@types";

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIRESTORE_API_KEY,
	authDomain: process.env.REACT_APP_FIRESTORE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIRESTORE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIRESTORE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIRESTORE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIRESTORE_APP_ID,
	measurementId: process.env.REACT_APP_FIRESTORE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

export const insertData = async (data: FormDataProps) => {
	const db = getFirestore(app);
	const collectionDB = collection(db, "hellfire-club");
	const docRef = await addDoc(collectionDB, data);

	return docRef.id;
};
