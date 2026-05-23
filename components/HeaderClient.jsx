"use client";

import {
  useUser,
  SignInButton,
  UserButton
} from "@clerk/nextjs";

import Link from "next/link";
import Image from "next/image";
import { LayoutDashboard, PenBox } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeaderClient() {
  const { isSignedIn, isLoaded } = useUser();

  return (
    <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
    <nav className="container mx-auto px-4 py-4 flex items-center justify-between">

      {/* Logo */}
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Logo"
          width={200}
          height={60}
          className="h-12 w-auto object-contain"
        />
      </Link>

     
      {isLoaded && (
        isSignedIn ? (
          <div className="flex items-center gap-3">

            <Link href="/dashboard">
              <Button variant="outline" className="flex items-center gap-2">
                <LayoutDashboard size={16} />
                <span className="hidden sm:inline">Dashboard</span>
              </Button>
            </Link>

            <Link href="/transaction/create">
              <Button className="flex items-center gap-2">
                <PenBox size={16} />
                <span className="hidden sm:inline">Add Transaction</span>
              </Button>
            </Link>

            <UserButton
              appearance={{
                elements: {
                  avatarBox: "h-10 w-10"
                }
              }}
            />

          </div>
        ) : (
          <SignInButton mode="redirect" forceRedirectUrl="/dashboard">
            <Button variant="outline">Login</Button>
          </SignInButton>
        )
      )}

    </nav>
    </div>
  );
}