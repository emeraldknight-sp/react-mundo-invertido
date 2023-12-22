import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { config } from "dotenv";

config();

const firebaseConfig = {
	apiKey: process.env.FIRESTORE_API_KEY,
	authDomain: process.env.FIRESTORE_AUTH_DOMAIN,
	projectId: process.env.FIRESTORE_PROJECT_ID,
	storageBucket: process.env.FIRESTORE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIRESTORE_MESSAGING_SENDER_ID,
	appId: process.env.FIRESTORE_APP_ID,
	measurementId: process.env.FIRESTORE_MEASUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
