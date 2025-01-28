"use client";
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
    const {status, data: session} = useSession();

  return (
    <div className="navbar mb-9 space-x-3">
    <Link className="btn btn-ghost text-xl" href="/">
        Home
    </Link>
    <Link className="btn btn-ghost text-lg" href="/users">
        Users
    </Link>
    {status === "authenticated"  && <div>
      <b>{session.user!.name}</b>
      <Link href="/api/auth/signout">Logout</Link>
      </div>}
    {status === "loading"  && <div>Loading....</div>}
    {status === "unauthenticated"  && <Link href="/api/auth/signin">Login</Link>}

  </div>
  )
}

