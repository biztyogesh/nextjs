"use client";
import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();
  return (
    <div>
      <h1 className="heading">Login Page</h1>
      {/* <Link href={"./"}>Go to home page</Link> */}
      <button onClick={() => router.push("./")}>about page</button>
      <br />
      <br />
      <button onClick={() => router.push("/login/login Student")}>
        go to loginstudent
      </button>
    </div>
  );
}

export default Login;
