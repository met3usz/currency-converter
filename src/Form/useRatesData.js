import { useState, useEffect } from 'react';

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({ state: 'loading' });

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(
          'https://api.exchangerate.host/latest?base=PLN'
        );

        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const { rates, date } = await response.json();
        setRatesData({ state: 'success', rates, date });
      } catch (error) {
        setRatesData({ state: 'error' });
        console.error('Something went kaboom O_o', error);
      }
    };
    setTimeout(fetchRates, 3000);
  }, []);

  return ratesData;
};
