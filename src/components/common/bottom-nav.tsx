// A new bottom navigation component for mobile view.

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
        <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-card border-t border-border z-50">
            <div className="flex justify-around items-center h-full">
                {navItems.map((item) => {
                    const isActive = item.href === '/' ? pathname === item.href : pathname.startsWith(item.href);

                    if (item.isCentral) {
                        return (
                            <div key={item.href} className="flex-1 flex justify-center items-center">
                                <Link href={item.href} className="relative -top-5">
                                    <motion.div
                                        className="bg-primary text-primary-foreground rounded-full h-16 w-16 flex flex-col items-center justify-center shadow-lg"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        whileTap={{ scale: 0.9 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    >
                                        <item.icon className="h-6 w-6" />
                                        <span className="text-xs font-medium mt-1">{item.label}</span>
                                    </motion.div>
                                </Link>
                            </div>
                        );
                    }

                    return (
                        <Link href={item.href} key={item.href} className="flex-1 flex flex-col items-center justify-center gap-1 h-full relative">
                           <motion.div
                             whileHover={{ scale: 1.1 }}
                             whileTap={{ scale: 0.95 }}
                             className="flex flex-col items-center"
                           >
                            <item.icon className={cn("h-5 w-5 transition-colors", isActive ? "text-primary" : "text-muted-foreground")} />
                            <span className={cn("text-xs transition-colors", isActive ? "text-primary font-semibold" : "text-muted-foreground")}>
                                {item.label}
                            </span>
                           </motion.div>
                           {isActive && <motion.div layoutId="bottom-nav-active" className="absolute bottom-0 h-0.5 w-6 bg-primary rounded-full" />}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
