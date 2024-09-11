import { useEffect, useState } from "react";

interface User {
  email: string | null;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Mocked authentication check - replace with real authentication check
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    } else {
      setUser(null);
    }
  }, []);

  const signOut = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return { user, signOut };
};
