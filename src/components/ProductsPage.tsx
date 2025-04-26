
import { useState, useEffect } from "react";
import Section from "./Section";
import ProductNav from "./ProductNav";
import ProductSection from "./ProductSection";
import { productData } from "@/data/productData";

const ProductsPage = () => {
  const [activeProduct, setActiveProduct] = useState("ml");
  
  useEffect(() => {
    // Check if URL has hash and set active product accordingly
    const hash = window.location.hash;
    if (hash) {
      const productSlug = hash.replace("#", "");
      if (productData[productSlug as keyof typeof productData]) {
        setActiveProduct(productSlug);
      }
    }
  }, []);

  return (
    <Section id="products" className="pt-24">
      <h2 className="text-4xl font-bold mb-12 text-center">
        Our <span className="tech-gradient">Technologies</span>
      </h2>
      
      <ProductNav activeProduct={activeProduct} setActiveProduct={setActiveProduct} />
      
      <div className="mt-6">
        {Object.values(productData).map((product) => (
          <div 
            key={product.id}
            className={activeProduct === product.id ? "block" : "hidden"}
          >
            <ProductSection {...product} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ProductsPage;
