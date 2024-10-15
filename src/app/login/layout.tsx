"use client";
import Link from "next/link";
import React, { ReactNode } from "react";
import "./login.css";
import { usePathname } from "next/navigation";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  return (
    <div>
      {pathname !== "/login/loginteacher" ? (
        <ul className="login-menu">
          <li>
            <h4>Login Navbar</h4>
          </li>
          <li>
            <Link href="/login">Login Main</Link>
          </li>
          <li>
            <Link href="/login/loginstudent">Student Login</Link>
          </li>
          <li>
            <Link href="/login/loginteacher">Teacher Login</Link>
          </li>
        </ul>
      ) : null}
      {children}
    </div>
  );
}
