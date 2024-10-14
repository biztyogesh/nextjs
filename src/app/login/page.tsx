import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

function Login() {
  return (
    <div>
      <h1>Login Page</h1>
      <Link href={"./"}>Go to home page</Link>
    </div>
  );
}

export default Login;
