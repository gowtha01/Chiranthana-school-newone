import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface PhotoCardProps {
  src: string;
  alt: string;
  title?: string;
  className?: string;
  children?: React.ReactNode;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ 
  src, 
  alt, 
  title, 
  className = "", 
  children 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={cn(
        "photo-card overflow-hidden rounded-xl shadow-lg relative group cursor-pointer",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 ease-out"
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        
        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Title overlay */}
        {title && (
          <motion.div
            className="absolute bottom-4 left-4 right-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 20
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <h3 className="text-white text-lg font-semibold">{title}</h3>
          </motion.div>
        )}
      </div>
      
      {children}
    </motion.div>
  );
};

export default PhotoCard;