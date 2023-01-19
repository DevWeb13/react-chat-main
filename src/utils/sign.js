import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../firebase";


export function authSignInWithRedirect() {
  return () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
}

export function authSignOut() {
  return () => {
    auth.signOut();
  };
}