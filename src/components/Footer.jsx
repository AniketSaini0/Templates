import {
  Mail,
  Phone,
  Twitter,
  Linkedin,
  Github,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-6 flex flex-col  justify-between items-center space-y-4 md:space-y-6">
        {/* Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} FitLife Gym. All rights reserved.
        </p>

        {/* Contact Info */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Phone className="w-5 h-5 text-gray-400" />
            <span className="text-sm">+91 234567890</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-5 h-5 text-gray-400" />
            <span className="text-sm">contact@fitlifegym.com</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-5 h-5 text-gray-400 hover:text-white transition" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="w-5 h-5 text-gray-400 hover:text-white transition" />
          </a>
        </div>
      </div>
      <div className="flex justify-center mt-1.5 items-center gap-1 sm:gap-1">
        Developer Contact: <Mail className="w-5 h-5 text-gray-600" />
        <span>aniketsaini252000@gmail.com.com</span>
      </div>
    </footer>
  );
}
