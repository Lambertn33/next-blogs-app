import Link from "next/link";

import { getCurrentUser } from "@/lib/session";

import LogoutBtn from "./LogoutBtn";

const Header = async () => {
  const user = await getCurrentUser();

  return (
    <header className="bg-gray-600 p-6">
      <nav className="flex justify-between items-center mx-auto max-w-4xl">
        <Link href="/" className="text-white text-3xl font-bold">
          Blogs
        </Link>
        {user?.email && (
          <Link href="/blogs/create" className="text-white text-3xl font-bold">
            Add Blog
          </Link>
        )}
        <ul className="flex space-x-4 items-center">
          <li>
            {user?.email ? (
              <LogoutBtn />
            ) : (
              <Link
                href="/api/auth/signin"
                className="text-white hover:underline font-semibold"
              >
                Authenticate
              </Link>
            )}
          </li>
          <li>
            <Link
              href="/blogs"
              className="text-white hover:underline font-semibold"
            >
              Blogs List
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
