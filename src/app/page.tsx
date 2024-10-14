"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <main>
        <h1>Event , function and State</h1>
        <Link href={"./login"}>Go to the login page</Link>
        <br />
        <br />
        <Link href={"./about"}>Go to the about page</Link>
        <br />
        <br />
        <button onClick={() => router.push("login")}>login page</button>
        <br />
        <br />
        <button onClick={() => router.push("about")}>about page</button>
      </main>
    </>
  );
}
