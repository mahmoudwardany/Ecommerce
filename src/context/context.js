import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { auth } from "../firebase";


const AuthContext=createContext()


const AuthProvider=({children})=>{
  const [currentUser,setCurrentUser]=useState('')
  const [loading,setLoading]=useState(true)
const signup=(email,password)=>{
return createUserWithEmailAndPassword(auth,email,password)

};
const login=(email,password)=>{
 return signInWithEmailAndPassword(auth,email,password)
};
const logout=()=>{
 return signOut(auth)

}
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    setCurrentUser(user);
    setLoading(false);
  });
  return () => {
    unsubscribe();
  };
}, [])
  return( 
  <AuthContext.Provider value={{currentUser,signup,logout,login}}>
    {!loading&& children}
  </AuthContext.Provider>
)}

export const useAuth = () => {
  return useContext(AuthContext);
};
export default AuthProvider

