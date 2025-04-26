
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

const Section = ({ id, className = "", children }: SectionProps) => {
  return (
    <section
      id={id}
      className={`min-h-screen w-full py-16 ${className}`}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default Section;
