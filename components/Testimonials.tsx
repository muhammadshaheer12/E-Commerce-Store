import Image from "next/image";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string; 
}

const testimonials: Testimonial[] = [
  {
    name: "Customer 1",
    role: "Premium Quality",
    quote:
      "I’ve never experienced shopping like this before. The quality is exceptional, and the service is beyond compare. Truly a premium experience",
    image: "/images/image1.png", 
  },
  {
    name: "Customer 2",
    role: "Customer Satisfaction",
    quote:
      "I’ve ordered from many online stores, but this one stands out. Great customer service, fast delivery, and top-quality products. I’ll be back for sure",
    image: "/images/image2.png", 
  },
  {
    name: "Customer 3",
    role: "Affordable Price",
    quote:
     "This store makes it so easy to get the best products without overspending. The prices are perfect for my budget",
    image: "/images/image3.png", 
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-yellow-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white text-center">
          What Our Customers Say
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-yellow-300 p-6 rounded-lg shadow-lg max-w-xs"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={`${testimonial.name}'s photo`}
                  width={50}
                  height={50}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-zinc-950">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">{`${testimonial.quote}`}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
