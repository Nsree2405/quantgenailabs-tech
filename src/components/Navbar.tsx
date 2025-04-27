
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/90 shadow-md backdrop-blur-md dark:bg-background/90" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex flex-col items-center flex-grow">
          <a
            href="#home"
            className="font-bold text-2xl flex items-center space-x-2 mb-2 dark:text-white"
          >
            <span className="tech-gradient">QuantGenAI Labs</span>
          </a>

          <nav className="hidden md:flex items-center justify-center w-full">
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-techpurple transition-colors duration-300 font-medium dark:text-gray-200 dark:hover:text-techpurple"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        </div>

        <ThemeToggle />

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden absolute right-4 top-4"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      <div
        className={`md:hidden bg-background/95 dark:bg-background/95 backdrop-blur-md transition-transform duration-300 ${
          mobileMenuOpen ? "max-h-64" : "max-h-0"
        } overflow-hidden`}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-700 dark:text-gray-200 hover:text-techpurple dark:hover:text-techpurple transition-colors duration-300 font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
