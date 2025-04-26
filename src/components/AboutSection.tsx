import Section from "./Section";
import { Card, CardContent } from "@/components/ui/card";
const AboutSection = () => {
  const features = [{
    title: "Comprehensive Coverage",
    description: "Detailed information about the latest technologies in AI, robotics, and computing"
  }, {
    title: "Research Papers",
    description: "Access to cutting-edge research papers and technical documentation"
  }, {
    title: "Visual Learning",
    description: "Rich visual content to help understand complex technological concepts"
  }, {
    title: "Technology Applications",
    description: "Real-world applications and use cases for each technology"
  }];
  return <Section id="about" className="bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">
          About <span className="tech-gradient">QuantGenAILABS</span>
        </h2>
        <p className="text-lg text-gray-700 mb-12 text-center">
          Your comprehensive guide to the most innovative technologies driving the future
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>)}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-gray-700 mb-4">At QuantGenAi Labs, we're dedicated to making complex technological concepts accessible to everyone. We believe in the power of knowledge sharing to accelerate innovation and progress.</p>
          <p className="text-gray-700">Our platform provides in-depth information on emerging AI and Quantum technologies, from artificial intelligence to quantum computing, with clear explanations, practical applications, and links to further resources.</p>
        </div>
      </div>
    </Section>;
};
export default AboutSection;