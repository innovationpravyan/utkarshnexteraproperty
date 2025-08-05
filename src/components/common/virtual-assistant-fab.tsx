'use client';

import Link from 'next/link';
import { MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export default function VirtualAssistantFab() {
  return (
    <Link
      href="/smart-faq"
      className="fixed bottom-5 right-5 z-50 group"
      title="Chat with our Virtual Assistant"
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        className="flex items-center gap-3 bg-primary text-primary-foreground rounded-full h-14 pl-4 pr-6 shadow-lg"
      >
        <MessageSquare className="h-6 w-6" />
        <div className="flex flex-col items-start leading-tight">
            <span className="font-semibold text-sm">Hey! I am your</span>
            <span className="font-bold">Virtual Assistant</span>
        </div>
      </motion.div>
    </Link>
  );
}
