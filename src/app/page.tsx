import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* <h1>Fetch Datawith API in Client Component</h1> */}
      <h1>Fetch Datawith API in Server Component</h1>
      {/* <Link href="/productlist">Go to Product List</Link> */}
      <Link href="/productdata">Go to Product List</Link>
    </main>
  );
}
