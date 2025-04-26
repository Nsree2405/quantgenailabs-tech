
import { useState } from "react";
import { cn } from "@/lib/utils";

const productCategories = [
  { name: "Machine Learning", slug: "ml" },
  { name: "Deep Learning", slug: "dl" },
  { name: "NLP", slug: "nlp" },
  { name: "Robotics", slug: "robotics" },
  { name: "Drones", slug: "drones" },
  { name: "Quantum Computing", slug: "quantum-computing" },
  { name: "Generative AI", slug: "genai" },
  { name: "LLMs", slug: "llms" },
];

interface ProductNavProps {
  activeProduct: string;
  setActiveProduct: (slug: string) => void;
}

const ProductNav = ({ activeProduct, setActiveProduct }: ProductNavProps) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="w-full bg-white shadow-sm sticky top-16 z-30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3 md:hidden">
          <span className="font-medium">
            {productCategories.find(cat => cat.slug === activeProduct)?.name || "Products"}
          </span>
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="text-gray-700"
          >
            {showMobileMenu ? "Close" : "Menu"}
          </button>
        </div>

        <nav 
          className={cn(
            "flex flex-col md:flex-row md:items-center md:space-x-8 overflow-hidden transition-all duration-300",
            showMobileMenu ? "max-h-96" : "max-h-0 md:max-h-none"
          )}
        >
          {productCategories.map((category) => (
            <a
              key={category.slug}
              href={`#${category.slug}`}
              className={cn(
                "py-3 block border-b md:border-b-2 md:border-transparent transition-colors duration-200",
                activeProduct === category.slug
                  ? "text-techpurple md:border-techpurple"
                  : "text-gray-700 hover:text-techpurple md:hover:border-techpurple/50"
              )}
              onClick={(e) => {
                e.preventDefault();
                setActiveProduct(category.slug);
                setShowMobileMenu(false);
                const element = document.getElementById("products");
                element?.scrollIntoView({ behavior: "smooth" });
                // Update URL without triggering navigation
                window.history.pushState(null, "", `#${category.slug}`);
              }}
            >
              {category.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default ProductNav;
