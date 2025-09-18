import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';
import PhotoCard from '../components/PhotoCard';

const AboutPage = () => {
  const aims = [
    'Facilitate students and staff with state of the art facilities to help learners reach their full potential',
    'Provide a caring and safe environment that inspires life long learning',
    'Kindle the spirit of sportsmanship for a healthy body and mind',
    'Train young minds to tackle new situations with confidence and adapt to technology',
    'Encourage critical thinking and awareness of ecological issues',
    'Celebrate India\'s values, cultures, and traditions',
    'Support community programs that build confidence and teamwork',
    'Maintain a secure campus with CCTV and trained staff'
  ];

  const highlights = [
    'Holistic development: academics, life skills, arts, and sports',
    'Affordable, quality schooling for all families',
    'Individual attention and mentorship for every learner',
    'An inclusive, community oriented culture'
  ];

  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

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
    <div className="min-h-screen pt-20">
      {/* Hero Banner */}
      <section className="relative h-64 lg:h-80 overflow-hidden">
        <PhotoCard
          src="/fashionshow.jpg"
          alt="Students at CHIRANTHANA SCHOOL"
          className="absolute inset-0 rounded-none"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
        </PhotoCard>
        
        <div className="relative z-10 h-full flex items-center justify-center text-white">
          <motion.div 
            className="text-center px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">About CHIRANTHANA SCHOOL</h1>
            <nav className="text-sm lg:text-base opacity-90">
              <Link to="/" className="hover:text-amber-300 transition-colors">Home</Link>
              <span className="mx-2">{'>'}</span>
              <span>About</span>
            </nav>
          </motion.div>
        </div>
      </section>

      <motion.div 
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Vision */}
        <motion.section className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6">Our Vision</h2>
          <div className="bg-blue-50 p-8 rounded-xl">
            <p className="text-lg text-gray-800 leading-relaxed">
              Chiranthana School aspires to provide world class learning experiences that nurture 
              intellectual, moral, social, and cultural wellness, preparing students to become 
              responsible citizens.
            </p>
          </div>
        </motion.section>

        {/* Mission */}
        <motion.section className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6">Our Mission</h2>
          <div className="bg-amber-50 p-8 rounded-xl">
            <p className="text-lg text-gray-800 leading-relaxed">
              We prepare each student for academic, social, and personal success by creating a 
              community of empowered, diverse learners in an atmosphere of mutual respect, 
              understanding, and trust.
            </p>
          </div>
        </motion.section>

        {/* Aims & Objectives */}
        <motion.section className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-8">Aims & Objectives</h2>
          <div className="grid gap-4">
            {aims.map((aim, index) => (
              <motion.div 
                key={index} 
                className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100"
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">{aim}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* About Us */}
        <motion.section className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6">About Us</h2>
          <div className="bg-gray-50 p-8 rounded-xl mb-8">
            <p className="text-lg text-gray-800 leading-relaxed mb-6">
              At Chiranthana School, education goes beyond textbooks and exams. We shape independent 
              thinkers, compassionate citizens, and confident achievers. Combining strong academic 
              foundations with values-based learning, our dedicated faculty nurtures curiosity, 
              creativity, and character in every child. Families trust us for our safe campus, 
              caring environment, and commitment to making quality education accessible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div 
                key={index} 
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700">{highlight}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTAs */}
        <motion.section 
          className="text-center space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/"
              className="inline-flex items-center space-x-2 bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200 focus-visible"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors duration-200 focus-visible"
          >
            Contact Us
          </motion.button>
        </motion.section>
      </motion.div>

      {/* Footer */}
      <footer className="bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-gray-300">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/SchoolLogo copy.jpg" 
                  alt="Chiranthana School Logo"
                  className="w-10 h-10 rounded-lg object-contain"
                />
                <div>
                  <h3 className="text-lg font-bold text-white">CHIRANTHANA SCHOOL</h3>
                  <p className="text-sm text-gray-400">Since 1991</p>
                </div>
              </div>
              <p className="text-sm">Nurturing curiosity, character, and competence</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
              <div className="space-y-2 text-sm">
                <p>KHB SATHYAMANGALA</p>
                <a
                  href="mailto:chiranthanaschoolhassan@gmail.com"
                  className="block hover:text-amber-500 transition-colors duration-200"
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
              <h3 className="text-lg font-semibent text-white mb-4">Follow Us</h3>
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
          
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Chiranthana Education Society. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;