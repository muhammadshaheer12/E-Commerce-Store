import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/NewsLetter";
import Products from "@/components/Products";

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Testimonials />
      <Newsletter />
    </>
  );
}
