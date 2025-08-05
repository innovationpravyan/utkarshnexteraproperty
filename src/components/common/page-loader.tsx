'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './logo';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // On the initial load, we show the loader for a longer period.
    const initialTimer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    // For subsequent route changes, we briefly show the loader again.
    setLoading(true);
    const routeChangeTimer = setTimeout(() => {
      setLoading(false);
    }, 500); // A shorter duration for faster navigation feel

    return () => clearTimeout(routeChangeTimer);
  }, [pathname]); // This effect re-runs every time the pathname changes

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center gap-4">
            <Logo className="h-16 text-primary animate-pulse" />
            <div className="w-48 h-1.5 bg-muted rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-primary"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
