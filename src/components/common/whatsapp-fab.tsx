// A new floating action button for WhatsApp.

'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function WhatsAppFab() {
  return (
    <Link
      href="https://wa.me/919214143300"
      target="_blank"
      rel="noopener noreferrer"
      title="Chat with us on WhatsApp. This will open WhatsApp in a new tab."
      className="fixed right-4 top-1/2 -translate-y-1/2 z-50 bg-green-500 text-white rounded-full h-14 w-14 shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center animate-pulse"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="h-8 w-8" />
    </Link>
  );
}
