"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 shadow-md bg-red-700">
      {/* Logo Section */}
      <div className="flex items-center">
        <Image
          src="/images/logo.png" // make sure your logo is in public/images/
          alt="Pind Daan Logo"
          width={100}
          height={100}
          className="object-contain"
        />
      </div>

      {/* Navigation Links */}
      <div className="flex gap-6 items-center">
        <Link
          href="/"
          className="text-white hover:text-gray-200 transition font-medium"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-white hover:text-gray-200 transition font-medium"
        >
          About
        </Link>
        <Link
          href="/services"
          className="text-white hover:text-gray-200 transition font-medium"
        >
          PindDaan
        </Link>
        <Link
          href="/destinations"
          className="text-white hover:text-gray-200 transition font-medium"
        >
          Destinations
        </Link>

        {/* Hotels Button */}
        <Link
          href="/hotels"
          className="text-white hover:text-gray-200 transition font-medium"
        >
          Hotels
        </Link>

        {/* Explore Button */}
        <Link
          href="/explore"
          className="text-white hover:bg-gray-100 transition font-medium"
        >
          Explore
        </Link>

        {/* News Button */}
        <Link
          href="/news"
          className="text-white hover:bg-gray-100 transition font-medium"
        >
          News
        </Link>

        {/* Moments Button */}
        <Link
          href="/moments"
          className="text-white hover:text-gray-200 transition font-medium"
        >
          Moments
        </Link>

        <Link
          href="/certificate"
          className="text-white hover:text-gray-200 transition font-medium"
        >
          Certificate
        </Link>

        {/* Login Button */}
        <Link
          href="/login"
          className="bg-red-600 text-white px-4 py-1 rounded-md hover:bg-red-800 transition text-sm font-medium"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
