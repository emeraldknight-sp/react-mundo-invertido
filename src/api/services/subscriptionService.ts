import {
	CollectionReference,
	DocumentReference,
	Firestore,
	Query,
	QuerySnapshot,
	SnapshotMetadata,
	addDoc,
	collection,
	getDocs,
	getFirestore,
	query,
	where,
} from "firebase/firestore";
import { FormDataProps, QueryResult } from "../../@types";
import { app } from "../config/firebaseInit";

export const addSubscription = async (data: FormDataProps) => {
	const db: Firestore = getFirestore(app);
	const collectionDB: CollectionReference = collection(db, "hellfire-club");
	const docRef: DocumentReference = await addDoc(collectionDB, data);

	return docRef.id;
};

export const getSubscriptionByEmail = async (email: string) => {
	const db: Firestore = getFirestore(app);
	const collectionDB: CollectionReference = collection(db, "hellfire-club");
	const q: Query = query(collectionDB, where("email", "==", email));

	const querySnapshot: QuerySnapshot = await getDocs(q);

	const queryResult: QueryResult[] = querySnapshot.docs.map((doc) => ({
		id: doc.id,
		data: doc.data(),
	}));

	return queryResult;
};
