
'use client';

import { CITIES_COVERED } from '@/lib/constants';
import React, { createContext, useState, useContext, ReactNode, useMemo } from 'react';

type CityContextType = {
  selectedCity: string;
  setSelectedCity: (city: string) => void;
};

const CityContext = createContext<CityContextType | undefined>(undefined);

export const CityProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCity, setSelectedCity] = useState<string>("Varanasi");

  const value = useMemo(() => ({ selectedCity, setSelectedCity }), [selectedCity]);

  return (
    <CityContext.Provider value={value}>
      {children}
    </CityContext.Provider>
  );
};

export const useCity = () => {
  const context = useContext(CityContext);
  if (context === undefined) {
    throw new Error('useCity must be used within a CityProvider');
  }
  return context;
};
