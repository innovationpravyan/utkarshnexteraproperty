'use client';

import { useState, useEffect } from 'react';
import { Wrench, Hammer, PencilRuler, HardHat } from 'lucide-react';
import { cn } from '@/lib/utils';

const icons = [Wrench, Hammer, PencilRuler, HardHat];
const PARTICLE_COUNT = 20;

type Particle = {
  id: number;
  Icon: React.ElementType;
  style: React.CSSProperties;
};

export default function RunningParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      return Array.from({ length: PARTICLE_COUNT }).map((_, i) => {
        const Icon = icons[i % icons.length];
        const duration = Math.random() * 10 + 10; // 10s to 20s
        const delay = Math.random() * 15; // 0s to 15s delay
        const startY = Math.random() * 100;
        const endY = Math.random() * 100;
        const startScale = Math.random() * 0.5 + 0.2; // 0.2 to 0.7
        const endScale = Math.random() * 0.5 + 0.2;
        const size = Math.floor(Math.random() * 24 + 16); // 16px to 40px

        return {
          id: i,
          Icon,
          style: {
            top: `${startY}vh`,
            width: `${size}px`,
            height: `${size}px`,
            '--duration': `${duration}s`,
            '--delay': `${delay}s`,
            '--start-y': `${startY}vh`,
            '--end-y': `${endY}vh`,
            '--start-scale': startScale,
            '--end-scale': endScale,
          } as React.CSSProperties,
        };
      });
    };
    setParticles(generateParticles());
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {particles.map(({ id, Icon, style }) => (
        <div key={id} className="absolute animate-run-particle" style={style}>
          <Icon className="h-full w-full text-primary/10" />
        </div>
      ))}
    </div>
  );
}
