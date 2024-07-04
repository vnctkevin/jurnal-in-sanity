import { FirebaseApp } from "firebase/app"
import firebase from "firebase/compat/app"

import "firebase/compat/analytics"

let app: FirebaseApp


// Initialize Firebase
if (typeof window !== undefined && !firebase.apps.length) {
    app = firebase.initializeApp({
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.FIREBASE_APP_ID,
        measurementId: process.env.FIREBASE_MEASUREMENT_ID,
    })
} else if (typeof window !== "undefined") {
    app = firebase.apps[0]
}

export { app,firebase }