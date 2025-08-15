'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Map, IndianRupee, LayoutPanelLeft, PenSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const navItems = [
    { href: '/', icon: Home, label: 'Home' },
    { href: '/projects', icon: Map, label: 'Our Projects' },
    { href: '/contact', icon: PenSquare, label: "Let's Build", isCentral: true },
    { href: '/cost-calculator', icon: IndianRupee, label: 'Cost Estimator' },
    { href: '/floor-plans', icon: LayoutPanelLeft, label: 'Floor Plans' },
];

export default function BottomNav() {
    const pathname = usePathname();

    return (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 h-14 xs:h-16 sm:h-18 bg-card border-t border-border z-50 safe-area-inset-bottom">
            <div className="flex justify-around items-center h-full px-1 xs:px-2 sm:px-4">
                {navItems.map((item) => {
                    const isActive = item.href === '/' ? pathname === item.href : pathname.startsWith(item.href);

                    if (item.isCentral) {
                        return (
                            <div key={item.href} className="flex-1 flex justify-center items-center">
                                <Link href={item.href} className="relative -top-3 xs:-top-4 sm:-top-5">
                                    <motion.div
                                        className="bg-primary text-primary-foreground rounded-full 
                                                 h-12 w-12 xs:h-14 xs:w-14 sm:h-16 sm:w-16 
                                                 flex flex-col items-center justify-center shadow-lg
                                                 transition-all duration-200"
                                        whileHover={{ 
                                            scale: 1.05,
                                            rotate: 3,
                                            transition: { type: "spring", stiffness: 400, damping: 25 }
                                        }}
                                        whileTap={{ 
                                            scale: 0.92,
                                            transition: { type: "spring", stiffness: 600, damping: 30 }
                                        }}
                                    >
                                        <item.icon className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6" />
                                        <span className="text-[8px] xs:text-[9px] sm:text-xs font-medium mt-0.5 xs:mt-1 
                                                       leading-tight text-center max-w-[70px] xs:max-w-[80px] sm:max-w-[90px]
                                                       break-words hyphens-auto">
                                            {item.label}
                                        </span>
                                    </motion.div>
                                </Link>
                            </div>
                        );
                    }

                    return (
                        <Link 
                            href={item.href} 
                            key={item.href} 
                            className="flex-1 flex flex-col items-center justify-center 
                                     gap-0.5 xs:gap-1 h-full relative px-1 xs:px-2 
                                     min-w-0 transition-all duration-200"
                        >
                            <motion.div
                                whileHover={{ 
                                    scale: 1.08,
                                    transition: { type: "spring", stiffness: 400, damping: 25 }
                                }}
                                whileTap={{ 
                                    scale: 0.95,
                                    transition: { type: "spring", stiffness: 600, damping: 30 }
                                }}
                                className="flex flex-col items-center justify-center"
                            >
                                <item.icon 
                                    className={cn(
                                        "h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 transition-all duration-200", 
                                        isActive ? "text-primary scale-110" : "text-muted-foreground hover:text-foreground"
                                    )} 
                                />
                                <span 
                                    className={cn(
                                        "text-[8px] xs:text-[9px] sm:text-xs transition-all duration-200 leading-tight text-center",
                                        "max-w-[60px] xs:max-w-[70px] sm:max-w-[80px] break-words hyphens-auto mt-0.5 xs:mt-1",
                                        isActive 
                                            ? "text-primary font-semibold transform scale-105" 
                                            : "text-muted-foreground font-medium hover:text-foreground"
                                    )}
                                >
                                    {item.label}
                                </span>
                            </motion.div>
                            {isActive && (
                                <motion.div 
                                    layoutId="bottom-nav-active" 
                                    className="absolute bottom-0 h-0.5 xs:h-1 sm:h-1 
                                             w-4 xs:w-5 sm:w-6 bg-primary rounded-full
                                             transition-all duration-200" 
                                    initial={{ opacity: 0, y: 2 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 2 }}
                                />
                            )}
                        </Link>
                    );
                })}
            </div>
            
            {/* Optional: Add a subtle gradient overlay for better visual separation */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/5 to-transparent pointer-events-none" />
        </div>
    );
}