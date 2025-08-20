import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Founder', path: '/founder' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Mandatory Public Disclosure', path: '/resources' },
  ];

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact';
    }
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center space-x-3 focus-visible">
              <img 
                src="/SchoolLogo copy.jpg" 
                alt="Chiranthana School Logo"
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg object-contain"
              />
              <div className="hidden sm:block">
                <h1 className="text-lg lg:text-xl font-bold text-gray-900">CHIRANTHANA</h1>
                <p className="text-xs lg:text-sm text-gray-600 -mt-1">SCHOOL</p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                onMouseEnter={() => setActiveItem(item.name)}
                onMouseLeave={() => setActiveItem(null)}
                className="relative"
              >
                <Link
                  to={item.path}
                  className={`text-sm font-medium transition-colors duration-200 focus-visible px-4 py-2 rounded-lg relative ${
                    location.pathname === item.path
                      ? 'text-blue-900'
                      : 'text-gray-700 hover:text-blue-900'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-blue-50 rounded-lg -z-10"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
                
                {activeItem === item.name && location.pathname !== item.path && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute inset-0 bg-blue-50/50 rounded-lg -z-10"
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.div>
            ))}
          </nav>

          {/* CTA Button - Only show on non-founder pages */}
          {location.pathname !== '/founder' && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="hidden lg:block bg-amber-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-amber-600 transition-colors duration-200 focus-visible"
            >
              Get in Touch
            </motion.button>
          )}

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus-visible"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gray-200 py-4 overflow-hidden"
            >
              <nav className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 focus-visible block ${
                        location.pathname === item.path
                          ? 'text-blue-900 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-900 hover:bg-blue-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                {location.pathname !== '/founder' && (
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.1 }}
                    onClick={() => {
                      scrollToContact();
                      setIsMenuOpen(false);
                    }}
                    className="mx-4 mt-4 bg-amber-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-600 transition-colors duration-200 focus-visible"
                  >
                    Get in Touch
                  </motion.button>
                )}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;