import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from "lucide-react";
import logo from "@assets/iScale_Studio_V_1764045233039.png";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/">
              <a className="flex items-center mb-4">
                <img src={logo} alt="iScale Studio" className="h-8 w-auto" />
              </a>
            </Link>
            <p className="text-muted-foreground text-xs leading-relaxed mb-6">
              Empowering businesses with cutting-edge AI solutions, intelligent workflow automation, and custom software development.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/iscalestudio/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-teal-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://x.com/iscalestudio/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-teal-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/company/iscalestudio/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-teal-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/iscalestudio/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-teal-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="/services"><a className="hover:text-teal-600 transition-colors">AI Web & App Development</a></Link></li>
              <li><Link href="/services"><a className="hover:text-teal-600 transition-colors">Workflow Automation</a></Link></li>
              <li><Link href="/services"><a className="hover:text-teal-600 transition-colors">AI Agent Development</a></Link></li>
              <li><Link href="/services"><a className="hover:text-teal-600 transition-colors">E-commerce Solutions</a></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="/about"><a className="hover:text-teal-600 transition-colors">About Us</a></Link></li>
              <li><Link href="/portfolio"><a className="hover:text-teal-600 transition-colors">Portfolio</a></Link></li>
              <li><Link href="/blog"><a className="hover:text-teal-600 transition-colors">Blog</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-teal-600 transition-colors">Contact</a></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                <span>Capas, Tarlac<br />Philippines 2315</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-teal-600 shrink-0" />
                <a href="mailto:hello@iscalestudio.com" className="hover:text-teal-700">hello@iscalestudio.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-teal-600 shrink-0" />
                <a href="tel:+639560623082" className="hover:text-teal-700">+63 956 0623 082</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} iScale Studio. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-teal-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-teal-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
