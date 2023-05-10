import { getAuth } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import { getFirestore } from "firebase/firestore"
import 'firebase/compat/auth';
const app =firebase.initializeApp({
    apiKey:"AIzaSyCDwt0alZ9s4dQPC3GgWNStlVYPSoRWHgQ",
    authDomain:process.env.AUTH_DOMAIN ,
    projectId:process.env.PROJECT_ID,
    storageBucket:process.env.STORAGE_BUCKET ,
    messagingSenderId:process.env.STORAGE_BUCKET,
    appId: process.env.APP_ID
})
export const auth=getAuth()
export default app
export const db=getFirestore(app)