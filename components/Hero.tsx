import Link from "next/link";

const Hero = () => {
    return (
        <section className="relative bg-yellow-300 text-black p-2">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative py-16 md:py-24">
                    {/* Decorative SVG */}
                    <div className="absolute inset-0 overflow-hidden">
                        <svg
                            className="absolute top-0 left-0 w-full h-full"
                            preserveAspectRatio="xMidYMid slice"
                            fill="none"
                            viewBox="0 0 1463 502"
                            aria-hidden="true"
                        >
                            <path
                                fill="rgba(255, 255, 255, 0.1)"
                                d="M-164 329L0 473l1463-1463-164-164L0 329z"
                            />
                        </svg>
                    </div>
                    
                    {/* Content */}
                    <div className="relative text-center">
                        <h1 className="text-[35px] font-extrabold tracking-tight sm:text-5xl">
                            Welcome to Our Store
                        </h1>
                        <p className="mt-6 text-xl max-w-3xl mx-auto text-black">
                            Discover the best products at the best prices. We have a wide range of products to choose from. Shop now! Dont miss out on the best deals. High quality products at the best prices.
                        </p>
                        <div className="mt-8">
                            <Link
                                href="/products"
                                className="inline-block bg-gray-900 text-white py-2 px-6 rounded-md font-medium hover:bg-gray-800"
                            >
                                Shop Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
