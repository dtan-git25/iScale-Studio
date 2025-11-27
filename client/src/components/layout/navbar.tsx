import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@assets/iScale_Studio_V_1764045233039.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [expandedSubmenu, setExpandedSubmenu] = useState<string | null>(null);
  const [location] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Helper function to check if location is within a service or its subpages
  const isServiceActive = (href: string, submenu?: any[]) => {
    if (location === href) return true;
    if (submenu) {
      return submenu.some(item => location === item.href);
    }
    return false;
  };

  // Check if any service is active
  const isAnyServiceActive = () => {
    return location.startsWith("/services") || 
           location === "/ai-sales-agent" || 
           location === "/ai-support-agent" || 
           location === "/ai-marketing-agent" || 
           location === "/ai-admin-agent" || 
           location === "/ai-research-agent" || 
           location === "/ai-content-agent";
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
        setExpandedSubmenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
  ];

  const serviceLinks = [
    { name: "AI Web Development", href: "/services/ai-web-development" },
    { name: "AI App Development", href: "/services/ai-app-development" },
    { name: "Workflow Automation", href: "/services/workflow-automation" },
    {
      name: "AI Agent Development",
      href: "/services/ai-agents",
      submenu: [
        { name: "AI Sales Agent", href: "/ai-sales-agent" },
        { name: "AI Support Agent", href: "/ai-support-agent" },
        { name: "AI Marketing Agent", href: "/ai-marketing-agent" },
        { name: "AI Admin Agent", href: "/ai-admin-agent" },
        { name: "AI Research Agent", href: "/ai-research-agent" },
        { name: "AI Content Agent", href: "/ai-content-agent" },
      ]
    },
    { name: "E-commerce Solutions", href: "/services/ecommerce-solutions" },
    { name: "Custom AI/ML Models", href: "/services/ai-ml-development" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen ? "bg-white/80 backdrop-blur-md border-b border-gray-200" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <img src={logo} alt="iScale Studio" className="h-6 w-auto md:h-8" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* About */}
            <Link 
              href={navLinks[0].href}
              className={`text-sm font-medium transition-all ${
                location === navLinks[0].href ? "text-transparent bg-clip-text bg-gradient-to-r from-[#9929ea] to-[#5808fb]" : "text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#9929ea] hover:to-[#5808fb]"
              }`}
            >
              {navLinks[0].name}
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group" ref={dropdownRef}>
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className={`text-sm font-medium transition-all flex items-center gap-1 ${
                  isAnyServiceActive() ? "text-transparent bg-clip-text bg-gradient-to-r from-[#9929ea] to-[#5808fb]" : "text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#9929ea] hover:to-[#5808fb]"
                }`}
              >
                Services
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={servicesDropdownOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className={`absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden ${
                  servicesDropdownOpen ? "block" : "hidden"
                }`}
              >
                {serviceLinks.map((link, idx) => (
                  <div key={link.name}>
                    {link.submenu ? (
                      <div>
                        <div className="flex items-center justify-between border-b border-gray-100">
                          <Link 
                            href={link.href}
                            onClick={() => {
                              setServicesDropdownOpen(false);
                              setExpandedSubmenu(null);
                            }}
                            className={`flex-1 px-4 py-3 text-sm transition-colors ${
                              isServiceActive(link.href, link.submenu) 
                                ? "text-transparent bg-clip-text bg-gradient-to-r from-[#9929ea] to-[#5808fb] font-semibold" 
                                : "text-gray-700 hover:bg-gray-50 hover:text-[#8629e4]"
                            }`}
                          >
                            {link.name}
                          </Link>
                          <button
                            onClick={() => setExpandedSubmenu(expandedSubmenu === link.name ? null : link.name)}
                            className="px-3 py-3 text-gray-700 hover:text-[#8629e4] transition-colors"
                          >
                            <ChevronDown className={`h-3 w-3 transition-transform ${expandedSubmenu === link.name ? "rotate-180" : ""}`} />
                          </button>
                        </div>
                        <AnimatePresence>
                          {expandedSubmenu === link.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="bg-gray-50 border-b border-gray-100 overflow-hidden"
                            >
                              {link.submenu.map((submenuItem) => (
                                <Link 
                                  key={submenuItem.name} 
                                  href={submenuItem.href}
                                  onClick={() => {
                                    setServicesDropdownOpen(false);
                                    setExpandedSubmenu(null);
                                  }}
                                  className="block px-6 py-2 text-sm text-gray-700 hover:bg-white hover:text-[#8629e4] transition-colors"
                                >
                                  {submenuItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link 
                        href={link.href}
                        onClick={() => {
                          setServicesDropdownOpen(false);
                        }}
                        className={`flex items-center justify-between px-4 py-3 text-sm transition-colors border-b border-gray-100 last:border-b-0 ${
                          location === link.href 
                            ? "text-transparent bg-clip-text bg-gradient-to-r from-[#9929ea] to-[#5808fb] font-semibold" 
                            : "text-gray-700 hover:bg-gray-50 hover:text-[#8629e4]"
                        }`}
                      >
                        <span>{link.name}</span>
                      </Link>
                    )}
                  </div>
                ))}
                <Link 
                  href="/services"
                  onClick={() => setServicesDropdownOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-[#8629e4] hover:bg-purple-50 transition-colors border-t border-gray-100"
                >
                  View All Services →
                </Link>
              </motion.div>
            </div>

            {/* Portfolio and Blog */}
            {navLinks.slice(1).map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-sm font-medium transition-all ${
                  location === link.href ? "text-transparent bg-clip-text bg-gradient-to-r from-[#9929ea] to-[#5808fb]" : "text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#9929ea] hover:to-[#5808fb]"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <Link href="/booking">
              <Button className="btn-gradient  border-0">
                Book a Call <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:[#8629e4] focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-200"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {/* About */}
              <Link 
                href={navLinks[0].href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 text-base font-medium rounded-md transition-colors ${
                  location === navLinks[0].href
                    ? "bg-[#8629e4]/5 [#8629e4]"
                    : "text-gray-700 hover:bg-gray-50 hover:[#8629e4]"
                }`}
              >
                {navLinks[0].name}
              </Link>

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className="w-full text-left px-3 py-4 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md transition-colors flex items-center justify-between"
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${servicesDropdownOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {servicesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-gray-50 rounded-md overflow-hidden"
                    >
                      {serviceLinks.map((link) => (
                        <div key={link.name}>
                          {link.submenu ? (
                            <div>
                              <div className="flex items-center justify-between bg-gray-50 hover:bg-white transition-colors">
                                <Link 
                                  href={link.href}
                                  onClick={() => {
                                    setIsOpen(false);
                                    setServicesDropdownOpen(false);
                                    setExpandedSubmenu(null);
                                  }}
                                  className="flex-1 px-6 py-3 text-sm text-gray-700 hover:text-[#8629e4] transition-colors"
                                >
                                  {link.name}
                                </Link>
                                <button
                                  onClick={() => setExpandedSubmenu(expandedSubmenu === link.name ? null : link.name)}
                                  className="px-3 py-3 text-gray-700 hover:text-[#8629e4] transition-colors"
                                >
                                  <ChevronDown className={`h-3 w-3 transition-transform ${expandedSubmenu === link.name ? "rotate-180" : ""}`} />
                                </button>
                              </div>
                              <AnimatePresence>
                                {expandedSubmenu === link.name && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="bg-white overflow-hidden"
                                  >
                                    {link.submenu.map((submenuItem) => (
                                      <Link 
                                        key={submenuItem.name} 
                                        href={submenuItem.href}
                                        onClick={() => {
                                          setIsOpen(false);
                                          setServicesDropdownOpen(false);
                                          setExpandedSubmenu(null);
                                        }}
                                        className="block px-9 py-2 text-sm text-gray-700 hover:text-[#8629e4] hover:bg-gray-50 transition-colors"
                                      >
                                        {submenuItem.name}
                                      </Link>
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          ) : (
                            <Link 
                              href={link.href}
                              onClick={() => {
                                setIsOpen(false);
                                setServicesDropdownOpen(false);
                              }}
                              className="block px-6 py-3 text-sm text-gray-700 hover:text-[#8629e4] hover:bg-white transition-colors"
                            >
                              {link.name}
                            </Link>
                          )}
                        </div>
                      ))}
                      <Link 
                        href="/services"
                        onClick={() => {
                          setIsOpen(false);
                          setServicesDropdownOpen(false);
                        }}
                        className="block px-6 py-3 text-sm font-medium text-[#8629e4] hover:bg-white transition-colors border-t border-gray-200"
                      >
                        View All Services →
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Portfolio and Blog */}
              {navLinks.slice(1).map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-4 text-base font-medium rounded-md transition-colors ${
                    location === link.href
                      ? "bg-[#8629e4]/5 [#8629e4]"
                      : "text-gray-700 hover:bg-gray-50 hover:[#8629e4]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
