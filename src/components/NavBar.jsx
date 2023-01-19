import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { authSignInWithRedirect, authSignOut } from "../utils/sign";


const NavBar = () => {
const [user] = useAuthState(auth);

  const googleSignIn = authSignInWithRedirect();

  const signOut = authSignOut();

  return (
    <nav className="nav-bar">
      <h1>React Chat</h1>
      {user ? (
        <button onClick={signOut} className="sign-out" type="button">
          Sign Out
        </button>
      ) : (
        <button className="sign-in">
          <img
            onClick={googleSignIn}
            src={GoogleSignin}
            alt="sign in with google"
          />
        </button>
      )}
    </nav>
  );
};

export default NavBar;


