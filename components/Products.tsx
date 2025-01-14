"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Define the structure of the Product object
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const Products = () => {
  const [data, setData] = useState<Product[] | null>(null);

  useEffect(() => {
    // Fetching data from the Fake Store API
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res); 
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  return (
    <div className="bg-yellow-300 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-yellow-800">
          Our Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data &&
            data.map((product) => (
              <div
                key={product.id}
                className="bg-yellow-600 p-6 rounded-lg shadow-md"
              >
                <Image
                  src={product.image} 
                  alt={product.title}
                  width={200} 
                  height={200}
                  className="h-48 w-full object-cover mb-4"
                />
                <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                <p className="text-gray-700 mb-4">${product.price.toFixed(2)}</p>
                {/* Add additional features like Add to Cart, etc. */}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Products;