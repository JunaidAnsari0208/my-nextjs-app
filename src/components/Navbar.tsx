import { auth } from "@/lib/firebase";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      router.push("/login");
    } catch (error) {
      console.error("Sign out failed", error);
    }
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-white text-lg font-bold cursor-pointer">
            MediLab
          </span>
        </Link>
        <div>
          {!loading && !user ? (
            <Link href="/login">
              <span className="text-white cursor-pointer">Login</span>
            </Link>
          ) : (
            <button
              onClick={handleSignOut}
              className="text-white bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition"
            >
              Sign Out
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
