
import Section from "./Section";
import { Mail, Phone } from "lucide-react";

const ContactSection = () => {
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
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=sayitqwerty@gmail.com&su=Subject%20Here&body=Your%20message%20body%20goes%20here"
                  target="_blank"
                  className="text-gray-600 hover:text-techpurple flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  sayitqwerty@gmail.com
                </a>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Phone</h4>
                <a 
                  href="tel:+919876543210"
                  className="text-gray-600 hover:text-techpurple flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  +91 8523040012
                </a>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Location</h4>
                <p className="text-gray-600">
                  Vasavi college of engineering,
                  Ibrahimbagh,
                  Hyderabad, 500086.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Follow Us</h4>
                <div className="flex space-x-4 mt-2">
                  <a href="https://www.linkedin.com/in/navya-sree-antharam/" className="text-gray-600 hover:text-techpurple">LinkedIn</a>
                  <a href="https://github.com/Nsree2405" className="text-gray-600 hover:text-techpurple">GitHub</a>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sayitqwerty@gmail.com&su=Subject%20Here&body=Your%20message%20body%20goes%20here" 
                  target="_blank" className="text-gray-600 hover:text-techpurple">Mail</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Ready to Collaborate?</h3>
            <p className="text-gray-600 mb-6">
              We're always excited to discuss new projects, innovations, and potential partnerships.
            </p>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sayitqwerty@gmail.com&su=Collaboration%20Inquiry&body=Hello,%0D%0A%0D%0AI'm interested in discussing a potential collaboration."
              target="_blank"
              className="px-6 py-3 bg-gradient-to-r from-techpurple to-techblue text-white rounded-md hover:opacity-90 transition-colors"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
