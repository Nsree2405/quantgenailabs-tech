
import { useState } from "react";
import Section from "./Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent",
        description: "We've received your message and will get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Section id="contact" className="bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">
          Get In <span className="tech-gradient">Touch</span>
        </h2>
        <p className="text-lg text-gray-700 mb-12 text-center">
          Have questions about our technologies? Reach out to us.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <p className="text-gray-700 mb-6">
              We're here to help and answer any question you might have. We look forward to hearing from you.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900">Email</h4>
                <p className="text-gray-600">info@techverse.example</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Headquarters</h4>
                <p className="text-gray-600">123 Technology Drive, Innovation District</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Follow Us</h4>
                <div className="flex space-x-4 mt-2">
                  <a href="#" className="text-gray-600 hover:text-techpurple">Twitter</a>
                  <a href="#" className="text-gray-600 hover:text-techpurple">LinkedIn</a>
                  <a href="#" className="text-gray-600 hover:text-techpurple">GitHub</a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-techpurple to-techblue text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
