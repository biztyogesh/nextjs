import Link from "next/link";
import React from "react";
// import styles from "./page.module.css";

function About() {
  return (
    <div>
      <h1>This is a About Page</h1>
      <Link href={"./"}>Go to home page</Link>
      <br />
      <Link href={"./about/aboutcollege"}>Go to Aboutcollege</Link>
      <Link href={"./about/aboutstudent"}>Go to Aboutcollege</Link>
    </div>
  );
}

export default About;
