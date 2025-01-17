"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
}

const ProductsPage = () => {
    const [data, setData] = useState<Product[] | null>(null);
    const router = useRouter();

    useEffect(() => {
        // Fetching API For Products Data
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((res) => {
                setData(res);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const viewSingleProduct = (productId: number) => {
        router.push(`/products/${productId}`); 
    };

    return (
        <div className="bg-yellow-300 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-center mb-8 text-yellow-900">Our Products</h1>
    
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data && data.map((product) => (
                        <div key={product.id} className="bg-yellow-300 p-6 rounded-lg shadow-md">
                            <Image
                                src={product.image}
                                alt={product.title}
                                width={1000}
                                height={1000}
                                className="h-48 w-full object-cover mb-4"
                            />
                            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                            <p className="text-yellow-900 mb-4">${product.price.toFixed(2)}</p>
                            <button
                                onClick={() => viewSingleProduct(product.id)}
                                className="bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800"
                            >
                                View Product
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;
