// "use client";
// import React from "react";

// function Student({ params }: any) {
//   return (
//     <div>
//       <h1>Student Details</h1>
//       <h3>Name:{params.studnet}</h3>
//     </div>
//   );
// }

import Link from "next/link";
import React from "react";

function StudentList() {
  return (
    <div>
      <h1>Student Details</h1>
      <ul>
        <li>
          <Link href="/studentlist/yogesh">Yogesh</Link>
        </li>
        <li>
          <Link href="/studentlist/dhiman">Dhiman</Link>
        </li>
        <li>
          <Link href="/studentlist/chandigarh">Chandigarh</Link>
        </li>
        <li>
          <Link href="/studentlist/hamirpur">Hamirpur</Link>
        </li>
      </ul>
    </div>
  );
}

export default StudentList; //
