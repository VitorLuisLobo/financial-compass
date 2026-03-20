import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MessageCircle, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import GabiChat from './GabiChat';

export default function GabiFAB() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  const isContactPage = location.pathname === '/contact';
  const isBlogSlugMobile = isMobile && /^\/blog\/.+/.test(location.pathname);

  if (isContactPage || isBlogSlugMobile) return null;

  return (
    <>
      {/* FAB */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          title="Fale com a Gabi"
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(142,71%,45%)] text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {/* Chat panel */}
      {isOpen && (
        <div
          className="fixed z-50 shadow-2xl"
          style={
            isMobile
              ? { inset: 0 }
              : { bottom: 24, right: 24, width: 380, height: 520, borderRadius: 16, overflow: 'hidden' }
          }
        >
          <GabiChat onClose={() => setIsOpen(false)} />
        </div>
      )}
    </>
  );
}
