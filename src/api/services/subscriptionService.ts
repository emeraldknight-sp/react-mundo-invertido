import {
	addDoc,
	collection,
	getDocs,
	getFirestore,
	query,
	where,
} from "firebase/firestore";
import { FormDataProps } from "../../@types";
import { app } from "../config/firebaseInit";

export const addSubscription = async (data: FormDataProps) => {
	const db = getFirestore(app);
	const collectionDB = collection(db, "hellfire-club");
	const docRef = await addDoc(collectionDB, data);

	return docRef.id;
};

export const getSubscriptionByEmail = async (email: string) => {
	const db = getFirestore(app);
	const collectionDB = collection(db, "hellfire-club");
	const q = query(collectionDB, where("email", "==", email));

	const querySnapshot = await getDocs(q);

	const queryResult = querySnapshot.docs.map((doc) => ({
		id: doc.id,
		data: doc.data(),
	}));

	return queryResult;
};
