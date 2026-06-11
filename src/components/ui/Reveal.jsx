import { motion, useReducedMotion } from 'framer-motion';

export function Reveal({ children, className = '', delay = 0, duration = 0.4, y = 15 }) {
  const shouldReduceMotion = useReducedMotion();
  const isCompactViewport = typeof window !== 'undefined' && window.matchMedia('(max-width: 1023px)').matches;

  if (shouldReduceMotion || isCompactViewport) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
