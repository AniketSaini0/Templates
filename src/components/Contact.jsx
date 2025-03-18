import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import React from "react";

export default function Contact() {
  return (
    <section name="Contact" className="py-12 bg-black md:px-44">
      <div className="px-4 md:px-6">
        <h2 className="text-2xl text-white font-bold tracking-wide sm:text-4xl md:text-4xl text-center mb-8">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Location Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
              <MapPin className="w-6 h-6 text-gray-600" />
              <span>Location</span>
            </h3>
            <div className="mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835739943557!2d144.9537363153021!3d-37.81721397975245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642a5c1b4ed97%3A0x4045675218d6a961!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sau!4v1678911275780!5m2!1sen!2sau"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <p className="text-gray-500">
              121 King St, Melbourne VIC 3000, Australia
            </p>
          </div>

          {/* Contact Information Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="flex items-center space-x-3 text-gray-500">
              <Phone className="w-5 h-5 text-gray-600" />
              <span>+123 456 7890</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-500 mt-2">
              <Mail className="w-5 h-5 text-gray-600" />
              <span>info@fitlifegym.com</span>
            </div>

            {/* Social Media Links */}
            <div className="mt-4">
              <h4 className="text-lg font-bold mb-2">Social Media</h4>
              <div className="flex space-x-6">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-pink-600 hover:text-pink-800">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-600">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
