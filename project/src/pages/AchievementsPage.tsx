import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Trophy, Star, Award, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';
import PhotoCard from '../components/PhotoCard';

const AchievementsPage = () => {
  const toppers = [
    { name: 'Ashwini N D', marks: 623, percentage: 99.6, photo: '/studentsPhoto.jpg' },
    { name: 'Dakshath G', marks: 619, percentage: 99.4, photo: '/studentsPhoto.jpg' },
    { name: 'Yogaraj', marks: 614, percentage: 98.24, photo: '/studentsPhoto.jpg' },
    { name: 'Mahima', marks: 613, percentage: 98.00, photo: '/studentsPhoto.jpg' },
    { name: 'Varun H D', marks: 613, percentage: 98.00, photo: '/studentsPhoto.jpg' },
    { name: 'Meghana', marks: 612, percentage: 98.00, photo: '/studentsPhoto.jpg' },
    { name: 'Rakshith', marks: 605, percentage: 97.00, photo: '/studentsPhoto.jpg' },
    { name: 'Jeevan K K', marks: 595, percentage: 95.00, photo: '/studentsPhoto.jpg' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
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
          alt="Chiranthana School student achievers"
          className="absolute inset-0 rounded-none"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        </PhotoCard>
        
        <div className="relative z-10 h-full flex items-center justify-center text-white">
          <motion.div 
            className="text-center px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">Celebrating Our Achievers</h1>
            <p className="text-lg lg:text-xl mb-4 opacity-90">
              Proud moments, shining stars — the students who inspire us all.
            </p>
            <nav className="text-sm lg:text-base opacity-90">
              <Link to="/" className="hover:text-amber-300 transition-colors">Home</Link>
              <span className="mx-2">{'>'}</span>
              <span>Achievements</span>
            </nav>
          </motion.div>
        </div>
      </section>

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Page Introduction */}
        <motion.section className="text-center mb-16" variants={itemVariants}>
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Trophy className="w-10 h-10 text-amber-500" />
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900">Our Academic Toppers</h2>
          </div>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            At Chiranthana School, excellence is not just encouraged — it is celebrated. Meet our brilliant 
            achievers whose dedication, hard work, and values embody what it means to be a Chiranthana student.
          </p>
        </motion.section>

        {/* Toppers Grid */}
        <motion.section className="mb-20" variants={itemVariants}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {toppers.map((topper, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6"
              >
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Trophy className="w-8 h-8 text-amber-600" />
                  </div>
                  <div className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold inline-flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>{topper.percentage}%</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{topper.name}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Total Marks:</span>
                      <span className="font-semibold text-gray-900">{topper.marks}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Percentage:</span>
                      <span className="font-semibold text-amber-600">{topper.percentage}%</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-center space-x-2 text-blue-900">
                      <Award className="w-5 h-5" />
                      <span className="text-sm font-medium">Academic Excellence</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Closing Section */}
        <motion.section className="text-center mb-16" variants={itemVariants}>
          <div className="bg-blue-50 rounded-xl p-8 lg:p-12">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl lg:text-3xl font-bold text-blue-900 mb-6">
                The Spirit of Chiranthana
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                These achievers reflect the spirit of Chiranthana — curious minds, determined efforts, 
                and the confidence to aim higher every day. Their success is a proud reminder of what 
                our students can accomplish when nurtured with care, guided with wisdom, and inspired 
                to reach their full potential.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <motion.div 
                  className="p-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Trophy className="w-8 h-8 text-amber-600" />
                  </div>
                  <h4 className="font-semibold text-blue-900 mb-2">Excellence</h4>
                  <p className="text-sm text-gray-600">Striving for the highest standards in academics and character</p>
                </motion.div>
                
                <motion.div 
                  className="p-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Star className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-blue-900 mb-2">Dedication</h4>
                  <p className="text-sm text-gray-600">Commitment to learning and personal growth every day</p>
                </motion.div>
                
                <motion.div 
                  className="p-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-blue-900 mb-2">Values</h4>
                  <p className="text-sm text-gray-600">Building character alongside academic achievement</p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Navigation */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/"
              className="inline-flex items-center space-x-2 bg-blue-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors duration-200 focus-visible"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
          </motion.div>
        </motion.div>
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
              <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
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

export default AchievementsPage;