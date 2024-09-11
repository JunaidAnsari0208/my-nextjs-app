// src/pages/index.tsx
import AboutUs from "../components/AboutUs";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
      <AboutUs />
    </div>
  );
};

export default Home;
