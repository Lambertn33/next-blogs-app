import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-600 p-6">
      <nav className="flex justify-between items-center mx-auto max-w-4xl">
        <Link href="/" className="text-white text-3xl font-bold">
          Blogs
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link
              href="/api/auth/signin"
              className="text-white hover:underline font-semibold"
            >
              Authenticate
            </Link>
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
