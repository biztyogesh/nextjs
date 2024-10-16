"use client";
import React from "react";

function Lecture({ params }) {
  console.log(params);
  return (
    <div>
      <h2> {params.lecture[0]} </h2>
      <h2> {params.lecture[1]} </h2>
    </div>
  );
}

export default Lecture;
