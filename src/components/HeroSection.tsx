
import Section from "./Section";

const HeroSection = () => {
  return (
    <Section id="home" className="flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-24">
      <div className="text-center max-w-4xl mx-auto animate-fade-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Explore the Future of <span className="tech-gradient">Technology</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Dive into cutting-edge technologies shaping our world - from Machine Learning to Quantum Computing
        </p>
        <a
          href="#products"
          className="px-8 py-3 bg-gradient-to-r from-techpurple to-techblue text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
        >
          Explore Technologies
        </a>
      </div>
    </Section>
  );
};

export default HeroSection;
