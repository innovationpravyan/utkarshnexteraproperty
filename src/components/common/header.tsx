
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, Phone } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';

import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CitySelectorDialog from "./city-selector-dialog";
import { Badge } from "@/components/ui/badge";
import Logo from "./logo";

const NavLink = ({ href, label, isNew, pathname }) => {
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className="relative font-medium transition-colors hover:text-primary text-sm"
    >
      <motion.span
        className={cn("relative", isActive ? "text-primary" : "text-secondary")}
      >
        {label}
        {isNew && (
          <Badge
            variant="destructive"
            className="absolute -top-2 -right-4 text-xs px-1.5 py-0.5"
          >
            NEW
          </Badge>
        )}
      </motion.span>
      {isActive && (
        <motion.div
          layoutId="header-active-link"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        />
      )}
    </Link>
  );
};

const MobileNavLink = ({ href, label, isNew, pathname, closeSheet }) => {
    const isActive = pathname === href;
    return (
        <Link
            href={href}
            onClick={closeSheet}
            className={cn(
                "text-lg font-medium relative transition-colors py-2 block",
                isActive ? "text-primary" : "text-secondary hover:text-primary"
            )}
            >
            {label}
            {isNew && (
                <Badge
                    variant="destructive"
                    className="ml-2 text-xs"
                >
                    NEW
                </Badge>
            )}
        </Link>
    );
};


const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClasses = cn(
    "sticky top-0 z-50 w-full transition-all duration-300",
    isScrolled ? "bg-white/80 backdrop-blur-sm shadow-md" : "bg-transparent",
    "text-secondary"
  );

  return (
    <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={headerClasses}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Logo
              className={cn("h-10", "text-secondary")}
            />
          </Link>
          <div className="hidden lg:block">
            <CitySelectorDialog />
          </div>
        </motion.div>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link, index) => (
             <motion.div
                key={link.href}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
             >
                <NavLink {...link} pathname={pathname} />
            </motion.div>
          ))}
        </nav>

        <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="hidden lg:flex items-center gap-4">
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
          >
            <Link href="/contact">Let's Build</Link>
          </Button>
          <a
            href="tel:+919214143300"
            className={cn("flex items-center gap-2 font-semibold text-sm transition-colors", "text-secondary hover:text-primary")}
          >
            <motion.div
                whileHover={{ scale: 1.1 }}
                className="h-10 w-10 rounded-full bg-black/10 text-white flex items-center justify-center"
            >
              <Phone className="h-4 w-4" />
            </motion.div>
            <span>+91 9214143300</span>
          </a>
        </motion.div>

        <div className="lg:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-white text-secondary w-[280px] p-0"
            >
              <SheetHeader className="p-4 border-b">
                <SheetTitle>
                  <Link
                    href="/"
                    onClick={() => setIsSheetOpen(false)}
                    className="flex items-center gap-2 self-start"
                  >
                    <Logo className="h-8 text-secondary" />
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col h-full">
                <div className="p-6 space-y-2 flex-grow">
                  <CitySelectorDialog />
                  <nav className="flex flex-col space-y-2 pt-4">
                    <AnimatePresence>
                    {NAV_LINKS.map((link, index) => (
                        <motion.div
                            key={link.href}
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.2 + index * 0.05, ease: "easeOut" }}
                        >
                            <MobileNavLink {...link} pathname={pathname} closeSheet={() => setIsSheetOpen(false)} />
                        </motion.div>
                    ))}
                    </AnimatePresence>
                  </nav>
                </div>
                <div className="p-6 border-t">
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() => setIsSheetOpen(false)}
                  >
                    <Link href="/contact">Let's Build</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
