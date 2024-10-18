"use client";
import React from "react";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
}
function page() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Async function to fetch data inside useEffect
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {products.map((item) => (
        <h3 key={item.id}>
          Name: {item.title}, Price: {item.price} category: {item.category}
        </h3>
      ))}
    </div>
  );
}

export default page;
//Data Fetch in client Component              client component k andar hum hooks use kr lete hai but server component pe hum hook use nahi kr skte hai
// Fetches product data from the API.
// Converts the response into JSON format.
//Updates the state with the fetched products using setProducts.
