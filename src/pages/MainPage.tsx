import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Users, GraduationCap, UserCheck, Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import PhotoCard from '../components/PhotoCard';

const MainPage = () => {
  const stats = [
    { icon: Calendar, value: '1991', label: 'Founded in', ariaLabel: 'Founded in 1991' },
    { icon: Users, value: '1,100+', label: 'Student strength', ariaLabel: 'Student strength 1,100 plus' },
    { icon: GraduationCap, value: '35+', label: 'Staff faculty', ariaLabel: 'Staff faculty 35 plus' },
    { icon: UserCheck, value: '20+', label: 'Non-teaching staff', ariaLabel: 'Non-teaching staff 20 plus' },
  ];

  const highlights = [
    'Holistic development: academics, life skills, values, co-curriculars',
    'Safe, supportive campus with clear safety protocols',
    'Individual attention and mentorship',
    'Inclusive, community-centered culture'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Your improved version */}
      <section className="relative h-[80vh] sm:h-screen flex items-center justify-center">
        <img 
          src="/Prayer.jpg" 
          alt="CHIRANTHANA SCHOOL campus" 
          className="absolute inset-0 w-full h-full object-cover brightness-50" 
        />
        <motion.div 
          className="relative z-10 text-center text-white px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            CHIRANTHANA SCHOOL
          </h1>
          <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            At CHIRANTHANA SCHOOL, learning is rooted in solid academics, everyday values, and skills for real life. 
            With caring teachers and a close-knit community, every child grows with confidence.
          </p>
          <Link
            to="/about"
            className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-amber-500 text-white font-semibold rounded-lg shadow-md hover:bg-amber-600 transition-colors duration-200"
          >
            About Us
          </Link>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-200"
                aria-label={stat.ariaLabel}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-900 mx-auto mb-2 sm:mb-3" />
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-900 mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mini About Section */}
      <section className="py-12 sm:py-16 bg-white">
        <motion.div 
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6"
            variants={itemVariants}
          >
            About Us
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed px-2"
            variants={itemVariants}
          >
            We blend strong academics with values-based learning in a safe, supportive environment. 
            Guided by caring teachers and a close-knit community, every learner is encouraged to grow 
            with curiosity, confidence, and character.
          </motion.p>
          
          <motion.div 
            className="grid gap-3 sm:gap-4 md:grid-cols-2 mb-6 sm:mb-8"
            variants={itemVariants}
          >
            {highlights.map((highlight, index) => (
              <motion.div 
                key={index} 
                className="flex items-start space-x-3 text-left"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{highlight}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/about"
                aria-label="Go to About page"
                className="inline-block bg-blue-900 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-800 transition-colors duration-200 focus-visible"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Students Photo Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <motion.div 
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-3 sm:mb-4">Our Learning Community</h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                At CHIRANTHANA SCHOOL, every student is part of a vibrant learning community where 
                curiosity thrives, friendships flourish, and dreams take shape. Our students embody 
                the values of respect, excellence, and compassion in everything they do.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/about"
                  className="inline-block bg-amber-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-amber-600 transition-colors duration-200 focus-visible"
                >
                  Discover More
                </Link>
              </motion.div>
            </div>
            
            <div className="order-1 lg:order-2">
              <PhotoCard
                src="/fashionshow.jpg"
                alt="Students at CHIRANTHANA SCHOOL"
                title="Our Bright Future Leaders"
                className="h-64 sm:h-80 lg:h-96"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* School Building Section */}
      <section className="py-12 sm:py-16 bg-white">
        <motion.div 
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="lg:order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-3 sm:mb-4">Modern Learning Environment</h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                Our state-of-the-art campus provides the perfect environment for learning and growth. 
                With well-equipped classrooms, modern facilities, and safe spaces for exploration, 
                we create an atmosphere where every child can reach their full potential.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/mandatory-public-disclosure"
                  className="inline-block bg-blue-900 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-blue-800 transition-colors duration-200 focus-visible"
                >
                  Explore Resources
                </Link>
              </motion.div>
            </div>
            
            <div className="lg:order-1">
              <PhotoCard
                src="/School.jpg"
                alt="CHIRANTHANA SCHOOL building"
                title="Modern Learning Environment"
                className="h-64 sm:h-80 lg:h-96"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 sm:py-16 bg-blue-900 text-white">
        <motion.div 
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Ready to Join Our Family?</h2>
          <p className="text-base sm:text-lg lg:text-xl mb-4 sm:mb-6 opacity-90 px-2">
            Discover how CHIRANTHANA SCHOOL can nurture your child's potential and shape their future.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/about"
                className="inline-block bg-white text-blue-900 px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-100 transition-colors duration-200 focus-visible w-full sm:w-auto"
              >
                Learn About Us
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => {
                  const contactElement = document.getElementById('contact');
                  if (contactElement) {
                    contactElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-block bg-amber-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-amber-600 transition-colors duration-200 focus-visible w-full sm:w-auto"
              >
                Get in Touch
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Get in touch</h2>
              <ContactForm />
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Contact Details</h3>
                <div className="space-y-3">
                  <a
                    href="mailto:chiranthanaschoolhassan@gmail.com"
                    className="flex items-center space-x-3 text-sm sm:text-base text-gray-700 hover:text-blue-900 transition-colors duration-200 focus-visible"
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <span className="break-all">chiranthanaschoolhassan@gmail.com</span>
                  </a>
                  <a
                    href="tel:+919743183793"
                    className="flex items-center space-x-3 text-sm sm:text-base text-gray-700 hover:text-blue-900 transition-colors duration-200 focus-visible"
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <span>+91 97431 83793</span>
                  </a>
                  <div className="flex items-start space-x-3 text-sm sm:text-base text-gray-700">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0" />
                    <div>
                      <p>Visit us: KHB SATHYAMANGALA</p>
                      <a
                        href="https://maps.app.goo.gl/HsLySsvJsifCdhhC9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-1 text-blue-900 hover:text-blue-700 font-medium focus-visible text-sm sm:text-base"
                      >
                        View on Maps
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Follow Us</h3>
                <div className="flex space-x-3">
                  <a
                    href="https://www.instagram.com/chiranthana_1991"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on Instagram"
                    className="w-10 h-10 bg-blue-900 text-white rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors duration-200 focus-visible"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.facebook.com/chiranthanaschool"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on Facebook"
                    className="w-10 h-10 bg-blue-900 text-white rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors duration-200 focus-visible"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/secretary-of-chiranthana-chiranthana-school-a6678737a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BeerDBJ6qSyOdEASoxolDkQ%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Connect with us on LinkedIn"
                    className="w-10 h-10 bg-blue-900 text-white rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors duration-200 focus-visible"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://x.com/Chiranthana1991"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on X"
                    className="w-10 h-10 bg-blue-900 text-white rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors duration-200 focus-visible"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 text-gray-300">
            <div>
              <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                <img 
                  src="/SchoolLogo copy.jpg" 
                  alt="Chiranthana School Logo"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg object-contain"
                />
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">CHIRANTHANA SCHOOL</h3>
                  <p className="text-xs sm:text-sm text-gray-400">Since 1991</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm">Nurturing curiosity, character, and competence</p>
            </div>
            
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Contact</h3>
              <div className="space-y-2 text-xs sm:text-sm">
                <p>KHB SATHYAMANGALA</p>
                <a
                  href="mailto:chiranthanaschoolhassan@gmail.com"
                  className="block hover:text-amber-500 transition-colors duration-200 break-all"
                >
                  chiranthanaschoolhassan@gmail.com
                </a>
                <a
                  href="tel:+919743183793"
                  className="block hover:text-amber-500 transition-colors duration-200"
                >
                  +91 97431 83793
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Follow Us</h3>
              <div className="flex space-x-3">
                <a
                  href="https://www.instagram.com/chiranthana_1991"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 bg-gray-700 text-white rounded flex items-center justify-center hover:bg-amber-500 transition-colors duration-200"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/chiranthanaschool"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 bg-gray-700 text-white rounded flex items-center justify-center hover:bg-amber-500 transition-colors duration-200"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 bg-gray-700 text-white rounded flex items-center justify-center hover:bg-amber-500 transition-colors duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://x.com/Chiranthana1991"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="w-8 h-8 bg-gray-700 text-white rounded flex items-center justify-center hover:bg-amber-500 transition-colors duration-200"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-700 text-center">
            <p className="text-gray-400 text-xs sm:text-sm">
              © 2025 Chiranthana Education Society. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
