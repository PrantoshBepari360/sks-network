import { useEffect, useState } from "react";
import { initializeFirebaseApp } from "./firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

// initialize firebase app
initializeFirebaseApp();

export const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsloading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const registerUser = (email: string, password: string, displayName: string) => {
    setIsloading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const newUser = { email, displayName };
        setUser(newUser);
        // set user to the database
        saveUser(email, displayName, "POST");
        // send name to firebase after creation
        updateProfile(auth.currentUser as any, {
          displayName,
        })
          .then(() => {})
          .catch((error) => {});
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsloading(false));
  };

  const loginUser = (email: string, password: string) => {
    setIsloading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsloading(false));
  };

  const signInWidthGoogle = () => {
    setIsloading(true);
    signInWithPopup(auth, googleProvider)
      .then((userCredential) => {
        const { email, displayName } = userCredential.user;
        saveUser(email as string, displayName as string, "PUT");
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsloading(false));
  };

  // obsurve user state
  useEffect((): any => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsloading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  useEffect(() => {
    fetch(`https://dry-shelf-35127.herokuapp.com/users/${(user as any).email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [(user as any).email]);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsloading(false));
  };

  const saveUser = (email: string, displayName: string, method: string) => {
    const user = { email, displayName };
    fetch("https://dry-shelf-35127.herokuapp.com/users", {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  return {
    user,
    isLoading,
    registerUser,
    loginUser,
    signInWidthGoogle,
    logOut,
    admin,
    authError,
  };
};
