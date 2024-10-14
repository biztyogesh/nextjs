"use client";
import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();
  return (
    <div>
      <h1>Login Page</h1>
      <Link href={"./"}>Go to home page</Link>
      <button onClick={() => router.push("./")}>about page</button>
    </div>
  );
}

export default Login;
