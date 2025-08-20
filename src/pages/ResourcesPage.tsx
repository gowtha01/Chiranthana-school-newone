import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Download, ExternalLink, Instagram, Facebook, Linkedin, Twitter, Eye } from 'lucide-react';
import PhotoCard from '../components/PhotoCard';

const ResourcesPage = () => {
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

  // Table A - General Information
  const generalInfo = [
    { sl: 1, item: 'Name of the school', details: 'CHIRANTHANA SCHOOL' },
    { sl: 2, item: 'Affiliation No. (if applicable)', details: '3/ps, 14-9-10' },
    { sl: 3, item: 'School Code (if applicable)', details: '29230707408' },
    { sl: 4, item: 'Complete Address with Pin Code', details: 'KHB SATHYAMANGALA, HASSAN' },
    { sl: 5, item: 'Principal Name & Qualification', details: 'Rtn. K. Palaksha, B.Ed' },
    { sl: 6, item: 'School Email ID', details: 'chiranthanaschoolhassan@gmail.com' },
    { sl: 7, item: 'Contact Details (Landline/Mobile)', details: '+91 97431 83793' },
  ];

  // Table B - Documents & Information
  const documents = [
    { 
      sl: 1, 
      item: 'Copies of Affiliation/Upgradation Letter and Recent Extension of Affiliation', 
      link: 'https://drive.google.com/file/d/1quE5LRPOeA09TyhTzt_oIn0AmCMvrEWZ/view?usp=sharing'
    },
    { 
      sl: 2, 
      item: 'Copies of Society/Trust/Company Registration Certificate', 
      link: 'https://drive.google.com/file/d/1lhAO0ACzLcuw5rB6MzcYCyUVs1hZcooJ/view?usp=sharing'
    },
    { 
      sl: 3, 
      item: 'Copy of No Objection Certificate (NOC) issued by State Government', 
      details: 'Not Applicable' 
    },
    { 
      sl: 4, 
      item: 'Copies of Recognition Certificate under RTE Act 2009', 
      link: 'https://drive.google.com/file/d/1lhAO0ACzLcuw5rB6MzcYCyUVs1hZcooJ/view?usp=sharing'
    },
    { 
      sl: 5, 
      item: 'Copy of Valid Building Safety Certificate', 
      link: 'https://drive.google.com/file/d/1inlcFM8KIPb7B-S87Pyi7LutpYORkhg-/view?usp=sharing'
    },
    { 
      sl: 6, 
      item: 'Copy of Valid Fire Safety Certificate issued by Competent Authority', 
      link: 'https://drive.google.com/file/d/1nclHeX92nCnqKMFZYnYctPQtd7B6ZUTR/view?usp=sharing'
    },
    { 
      sl: 7, 
      item: 'Copy of the DEO Certificate submitted by the School', 
      link: 'https://drive.google.com/file/d/1lhAO0ACzLcuw5rB6MzcYCyUVs1hZcooJ/view?usp=sharing'
    },
    { 
      sl: 8, 
      item: 'Copy of Valid Water, Health, and Sanitation Certificates', 
      link: 'https://drive.google.com/file/d/1a0YvuIPmfWzuPxiDywlq2IQaU8pBO4b-/view?usp=sharing'
    },
  ];

  // Table 3 - Academics
  const academicsInfo = [
    { 
      sl: 1, 
      item: 'FEE STRUCTURE OF THE SCHOOL', 
      link: 'https://drive.google.com/file/d/1GaL8wTvfKfcWB45g7JcFHNnyQABS1UKF/view?usp=sharing'
    },
    { 
      sl: 2, 
      item: 'ANNUAL ACADEMIC CALENDAR', 
      link: 'https://drive.google.com/file/d/1e9O9-FeMes_RnAUdqzUpILI8fUvwJrIX/view?usp=sharing'
    },
    { 
      sl: 3, 
      item: 'LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)', 
      link: 'https://drive.google.com/file/d/1AiNg5MXyl5hi29ylZD5OPOuRdB5dfq2D/view?usp=sharing'
    },
    { 
      sl: 4, 
      item: 'LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS', 
      link: 'https://drive.google.com/file/d/1TV_0wnsPczS07U2wUkrslPlybuLV-rpG/view?usp=sharing'
    },
    { 
      sl: 5, 
      item: 'LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION AS PER APPLICABLILITY', 
      details: '-'
    },
  ];

  // Table 4 - Staff (Teaching)
  const staffInfo = [
    { sl: 1, item: 'Principal', details: 'Rtn. K. Palaksha' },
    { sl: 2, item: 'Total No. of Teachers', details: '21' },
    { sl: '2a', item: '• PGT', details: '3' },
    { sl: '2b', item: '• TGT', details: '8' },
    { sl: '2c', item: '• PRT', details: '9' },
    { sl: 3, item: 'Teachers Section Ratio', details: '1:15' },
    { sl: 4, item: 'Details of Special Educator', details: '1' },
    { sl: 5, item: 'Details of Counselor and Wellness Teacher', details: '1' },
  ];

  // Table 5 - School Infrastructure
  const infrastructureInfo = [
    { sl: 1, item: 'Total Campus Area of the School (in Sq. mtr.)', details: '6108' },
    { sl: 2, item: 'No. and Size of the Class Rooms (in Sq. mtr.)', details: '40 & 54' },
    { sl: 3, item: 'No. and Size of Laboratories (in Sq. mtr.)', details: '6 & 70' },
    { sl: 4, item: 'Internet Facility (Y/N)', details: 'Yes' },
    { sl: 5, item: 'No. of Girls Toilets', details: '16' },
    { sl: 6, item: 'No. of Boys Toilets', details: '16' },
    { sl: 7, item: 'Link of YouTube Video of the Inspection of School Covering Infrastructure of the School', details: '-' },
  ];

  // Additional Important Documents
  const additionalDocuments = [
    {
      title: 'Fee Structure',
      description: 'Detailed fee structure for all classes and academic year',
      link: 'https://drive.google.com/file/d/1GaL8wTvfKfcWB45g7JcFHNnyQABS1UKF/view?usp=sharing'
    },
    {
      title: 'Annual Academic Calendar',
      description: 'Complete academic calendar with important dates and events',
      link: 'https://drive.google.com/file/d/1e9O9-FeMes_RnAUdqzUpILI8fUvwJrIX/view?usp=drive_link'
    },
    {
      title: 'School Management Committee (SMC)',
      description: 'Details of School Management Committee members and structure',
      link: 'https://drive.google.com/file/d/1AiNg5MXyl5hi29ylZD5OPOuRdB5dfq2D/view?usp=sharing'
    },
    {
      title: 'Parent Teacher Association (PTA)',
      description: 'Information about PTA members and activities',
      link: 'https://drive.google.com/file/d/1TV_0wnsPczS07U2wUkrslPlybuLV-rpG/view?usp=drive_link'
    },
  ];

  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const DisclosureTable = ({ 
    title, 
    emoji, 
    data, 
    hasLinks = false 
  }: { 
    title: string; 
    emoji: string; 
    data: any[]; 
    hasLinks?: boolean;
  }) => (
    <motion.section className="mb-12" variants={itemVariants}>
      <div className="flex items-center space-x-3 mb-6">
        <span className="text-2xl">{emoji}</span>
        <h3 className="text-2xl font-bold text-blue-900">{title}</h3>
      </div>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden" style={{ borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead style={{ backgroundColor: '#1F3A8A' }} className="text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-bold">SL No.</th>
                <th className="px-6 py-4 text-left text-sm font-bold">
                  {hasLinks ? 'Documents / Information' : 'Information'}
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold">
                  {hasLinks ? 'View Link' : 'Details'}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.map((item, index) => (
                <tr 
                  key={index} 
                  className="transition-colors duration-200 hover:bg-blue-50"
                  style={{ 
                    backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#F7F7FB'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#E8EEFB';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = index % 2 === 0 ? '#FFFFFF' : '#F7F7FB';
                  }}
                >
                  <td className="px-6 py-4 text-sm font-medium" style={{ color: '#111827' }}>
                    {item.sl}
                  </td>
                  <td className="px-6 py-4 text-sm" style={{ color: '#111827' }}>
                    {item.item}
                  </td>
                  <td className="px-6 py-4">
                    {hasLinks && item.link ? (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleLinkClick(item.link)}
                        className="inline-flex items-center space-x-2 bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors duration-200 focus-visible"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View Document</span>
                      </motion.button>
                    ) : (
                      <span className="text-sm font-medium" style={{ color: '#111827' }}>
                        {item.details || (hasLinks && !item.link ? 'Not Applicable' : '')}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.section>
  );

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Banner */}
      <section className="relative h-64 lg:h-80 overflow-hidden">
        <PhotoCard
          src="/School.jpg"
          alt="Chiranthana School Resources"
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
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">Mandatory Public Disclosure</h1>
            <p className="text-lg lg:text-xl mb-4 opacity-90">
              Transparency in education - Important documents and information
            </p>
            <nav className="text-sm lg:text-base opacity-90">
              <Link to="/" className="hover:text-amber-300 transition-colors">Home</Link>
              <span className="mx-2">{'>'}</span>
              <span>Mandatory Public Disclosure</span>
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
        {/* Introduction */}
        <motion.section className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6">School Disclosure Information</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            As per CBSE guidelines and regulatory requirements, we provide complete transparency 
            through mandatory public disclosure of all essential school information and documents.
          </p>
        </motion.section>

        {/* Table A - General Information */}
        <DisclosureTable 
          title="Table A — General Information"
          emoji="📖"
          data={generalInfo}
          hasLinks={false}
        />

        {/* Table B - Documents & Information */}
        <DisclosureTable 
          title="Table B — Documents & Information"
          emoji="📄"
          data={documents}
          hasLinks={true}
        />

        {/* Table C - Academics */}
        <DisclosureTable 
          title="Table C — Academics"
          emoji="📚"
          data={academicsInfo}
          hasLinks={true}
        />

        {/* Table D - Staff (Teaching) */}
        <DisclosureTable 
          title="Table D — Staff (Teaching)"
          emoji="👩‍🏫"
          data={staffInfo}
          hasLinks={false}
        />

        {/* Table E - School Infrastructure */}
        <DisclosureTable 
          title="Table E — School Infrastructure"
          emoji="🏫"
          data={infrastructureInfo}
          hasLinks={false}
        />


        {/* Important Notice */}
        <motion.section className="mb-16" variants={itemVariants}>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-amber-800 mb-3">Important Notice</h4>
            <p className="text-amber-700 leading-relaxed">
              All documents are maintained as per CBSE guidelines and regulatory requirements. 
              For any queries regarding these documents or to request additional information, 
              please contact the school administration at{' '}
              <a 
                href="mailto:chiranthanaschoolhassan@gmail.com" 
                className="font-medium underline hover:text-amber-800 transition-colors"
              >
                chiranthanaschoolhassan@gmail.com
              </a>{' '}
              or call{' '}
              <a 
                href="tel:+919743183793" 
                className="font-medium underline hover:text-amber-800 transition-colors"
              >
                +91 97431 83793
              </a>.
            </p>
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
                  href="https://www.linkedin.com/in/secretary-of-chiranthana-chiranthana-school-a6678737a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BeerDBJ6qSyOdEASoxolDkQ%3D%3D"
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

export default ResourcesPage;