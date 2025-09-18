import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Instagram, Facebook, Linkedin, Twitter, Quote } from 'lucide-react';
import PhotoCard from '../components/PhotoCard';

const FounderPage = () => {
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
          src="/Founder_and_Principal.jpg"
          alt="Leaders of CHIRANTHANA SCHOOL"
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
            <h1 className="text-2xl lg:text-4xl font-bold mb-4">Meet the Leaders of Chiranthana Education Society</h1>
            <nav className="text-sm lg:text-base opacity-90">
              <Link to="/" className="hover:text-amber-300 transition-colors">Home</Link>
              <span className="mx-2">{'>'}</span>
              <span>Founder</span>
            </nav>
          </motion.div>
        </div>
      </section>

      <motion.div 
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Page Title */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Our Leaders – Founder & Secretary</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Guided by purpose, service, and educational excellence, our leaders shape the vision and 
            day-to-day impact of Chiranthana.
          </p>
        </motion.div>

        {/* Leader 1 - Rtn. K. Palaksha */}
        <motion.section className="mb-20" variants={itemVariants}>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <PhotoCard
              src="/Founder_and_Principal.jpg"
              alt="Rtn. K. Palaksha, Founder & Principal, Chiranthana School"
              className="w-full max-w-md mx-auto lg:mx-0 h-80 lg:h-96"
            />
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-blue-900 mb-2">Rtn. K. Palaksha</h3>
                <p className="text-lg text-amber-600 font-semibold mb-4">Founder & Principal, Chiranthana School</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Early Life & Education</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Born into a family that valued education and service, Rtn. K. Palaksha's formative years 
                    were shaped by strong academic foundations and community values. His educational journey 
                    laid the groundwork for his lifelong commitment to nurturing young minds.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Career & Academic Achievements</h4>
                  <p className="text-gray-700 leading-relaxed">
                    With over three decades in education, he has been instrumental in establishing 
                    Chiranthana School as a beacon of quality education since 1991. His leadership has 
                    guided the institution through significant milestones, earning recognition for 
                    academic excellence and holistic development.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Community Service (Rotary Roles)</h4>
                  <p className="text-gray-700 leading-relaxed">
                    As an active Rotarian, he has spearheaded numerous community initiatives, focusing 
                    on education accessibility, student welfare programs, and community development 
                    projects that have positively impacted thousands of lives.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Vision for Chiranthana School</h4>
                  <p className="text-gray-700 leading-relaxed">
                    His vision encompasses creating an educational environment where academic excellence 
                    meets character building, preparing students not just for careers but for life as 
                    responsible global citizens.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-900">
                  <Quote className="w-8 h-8 text-blue-900 mb-3" />
                  <p className="text-lg text-blue-900 font-medium italic">
                    "Education must shape character, competence, and compassion."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Leader 2 - Dr. Chiranth Gowda H P */}
        <motion.section className="mb-20" variants={itemVariants}>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <PhotoCard
              src="/DrChiranth.jpg"
              alt="Dr. Chiranth Gowda H P, Secretary, Chiranthana Education Society"
              className="lg:order-2 w-full max-w-md mx-auto lg:mx-0 h-80 lg:h-96"
            />
            
            <div className="lg:order-1 space-y-6">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-blue-900 mb-2">Dr. Chiranth Gowda H P</h3>
                <p className="text-lg text-amber-600 font-semibold mb-4">Secretary, Chiranthana Education Society</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Medical & Academic Background</h4>
                  <p className="text-gray-700 leading-relaxed">
                    A qualified Radiologist (MDRD), he completed his MD in Radiodiagnosis at Rajarajeswari 
                    Medical College, Bengaluru, following his MBBS and internship at Yenepoya Medical College, 
                    Mangalore.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Leadership in Education & Healthcare</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Secretary of Chiranthana Education Society and head of Chiranthana Diagnostics, 
                    Holenarasipura, advancing accessible healthcare services locally.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Commitment to Education</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Alongside his medical career, he is deeply committed to quality and affordable education, 
                    actively contributing to the growth and vision of Chiranthana Education Society.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Values & Personal Attributes</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Fluent in multiple languages and known for leadership, teamwork, and a service-oriented 
                    approach—embodying excellence, dedication, and community service across healthcare and education.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Leaders at a Glance */}
        <motion.section className="mb-16" variants={itemVariants}>
          <h3 className="text-2xl lg:text-3xl font-bold text-blue-900 mb-8 text-center">Leaders at a Glance</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-xl font-bold text-blue-900 mb-4">Founder Focus</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Vision-led academics and values-based education</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Student safety, mentorship, and community engagement</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Lifelong learning mindset</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-xl font-bold text-blue-900 mb-4">Secretary Focus</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Quality, affordable education initiatives</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Healthcare leadership via Chiranthana Diagnostics</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Collaboration, languages, and service-first ethos</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* Navigation */}
        <motion.section className="mb-16 text-center" variants={itemVariants}>
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

export default FounderPage;