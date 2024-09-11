import { auth } from "@/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Link from "next/link";
import { useEffect, useState } from "react";

const Authentication = () => {
  const [authenticatedUser, setauthenticatedUser] = useState("");
  useEffect(() => {
    const listenAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setauthenticatedUser(user);
      } else {
        setauthenticatedUser(null);
      }
    });
    return () => {
      listenAuth();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      {authenticatedUser === null ? (
        <>
          <div>
            <Link href="/login" className="text-blue-600 hover:text-blue-800">
              Sign-In
            </Link>
          </div>
        </>
      ) : (
        <>
          <div>
            <Link
              href="/"
              onClick={userSignOut}
              className="text-blue-600 hover:text-blue-800"
            >
              Sign-Out
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default Authentication;
