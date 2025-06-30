import React from "react";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react"; // Make sure this is 'react' not 'next'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="bg-gray-100 border-b border-gray-300 py-4 px-6">
        <nav className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/">
            <span className="text-lg font-semibold">Japan Home Advisor</span>
          </Link>
          <div className="space-x-4 text-sm">
            <Link href="/about">About</Link>
            <Link href="/request">Contact</Link>
          </div>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="bg-gray-100 border-t border-gray-300 mt-12 py-4 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Japan Home Advisor. All rights reserved.
      </footer>

      <Analytics /> {/* Add this line */}
    </div>
  );
};

export default Layout;
