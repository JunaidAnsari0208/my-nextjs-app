import { useAuth } from "@/hooks/useAuth"; // Adjust the path as per your project structure
import Link from "next/link";

const Navbar: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600 hover:text-blue-800"
        >
          MediLab
        </Link>
        <div>
          {user ? (
            <button
              onClick={signOut}
              className="text-blue-600 hover:text-blue-800"
            >
              Sign Out
            </button>
          ) : (
            <Link href="/login" className="text-blue-600 hover:text-blue-800">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
