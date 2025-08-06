'use client';

import Link from 'next/link';
import { MessageSquare } from 'lucide-react';

export default function VirtualAssistantFab() {
  return (
    <Link
      href="/smart-faq"
      className="fixed bottom-20 right-5 z-50 group"
      title="Chat with our Virtual Assistant"
    >
      <div className="relative flex items-center bg-primary text-primary-foreground rounded-full h-14 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
        {/* Icon container */}
        <div className="flex items-center justify-center w-14 h-14 flex-shrink-0">
          <MessageSquare className="h-6 w-6" />
        </div>
        
        {/* Text content - shows on hover */}
        <div className="max-w-0 group-hover:max-w-xs transition-all duration-1000 ease-out overflow-hidden">
          <div className="pl-2 pr-6 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
            <div className="font-semibold text-sm">Hey! I am your</div>
            <div className="font-bold text-sm">Virtual Assistant</div>
          </div>
        </div>
      </div>
    </Link>
  );
}