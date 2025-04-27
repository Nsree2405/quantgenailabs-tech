
import { ReactNode } from "react";

interface ProductSectionProps {
  id: string;
  title: string;
  description: string;
  types: string[];
  applications: string[];
  papers: { title: string; url: string }[];
  imagePath: string;
}

const ProductSection = ({
  id,
  title,
  description,
  types,
  applications,
  papers,
  imagePath,
}: ProductSectionProps) => {
  return (
    <div id={id} className="w-full animate-fade-in">
      <div 
        className="product-hero w-full flex items-end"
        style={{ backgroundImage: `url(${imagePath})` }}
      >
        <div className="product-hero-content container mx-auto px-4 py-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h2>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 dark:bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 dark:text-white">Definition</h3>
            <p className="text-gray-700 dark:text-gray-300">{description}</p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 dark:text-white">Types</h3>
            <ul className="list-disc pl-6 space-y-2">
              {types.map((type, index) => (
                <li key={index} className="text-gray-700 dark:text-gray-300">{type}</li>
              ))}
            </ul>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 dark:text-white">Applications</h3>
            <ul className="list-disc pl-6 space-y-2">
              {applications.map((application, index) => (
                <li key={index} className="text-gray-700 dark:text-gray-300">{application}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 dark:text-white">Related Papers</h3>
            <ul className="space-y-3">
              {papers.map((paper, index) => (
                <li key={index}>
                  <a
                    href={paper.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-techblue hover:underline dark:text-techpurple"
                  >
                    {paper.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
