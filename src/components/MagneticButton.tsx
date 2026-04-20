import { useRef, useState, ReactNode } from 'react';
import { motion, useSpring } from 'motion/react';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
}

export function MagneticButton({ children, className = '', onClick, variant = 'primary' }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Use springs for smooth interpolation
  const springX = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    
    // Calculate the distance from center
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    
    // Apply a scaling factor to control the magnetic strength
    springX.set(middleX * 0.2);
    springY.set(middleY * 0.2);
  };

  const reset = () => {
    setIsHovered(false);
    springX.set(0);
    springY.set(0);
  };

  let bgClass = '';
  if (variant === 'primary') {
    bgClass = 'bg-[#FF2A00] text-white shadow-[0_0_20px_rgba(255,42,0,0.4)] hover:shadow-[0_0_35px_rgba(255,42,0,0.7)] border border-[#FF2A00]';
  } else if (variant === 'secondary') {
    bgClass = 'bg-[#1A1A1A] text-white border border-white/10 hover:border-white/30 hover:bg-[#2A2A2A] shadow-xl';
  } else if (variant === 'outline') {
    bgClass = 'bg-transparent text-[#FF2A00] border border-[#FF2A00] hover:bg-[#FF2A00]/10';
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={reset}
      onClick={onClick}
      style={{ x: springX, y: springY }}
      className={`relative px-8 py-4 uppercase font-heading font-bold tracking-widest flex items-center justify-center transition-colors duration-300 ${bgClass} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="relative z-10 flex items-center">
        {children}
      </span>
      {/* Optional internal glow highlight strictly for primary variant */}
      {variant === 'primary' && isHovered && (
        <motion.div 
          className="absolute inset-0 bg-white/20 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </motion.button>
  );
}
