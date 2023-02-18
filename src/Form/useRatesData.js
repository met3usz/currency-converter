import { useState, useEffect } from 'react';
import axios from 'axios';

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({ state: 'loading' });

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get(
          'https://api.exchangerate.host/latest?base=PLN'
        );
        setRatesData({
          state: 'success',
          rates: response.data.rates,
          date: response.data.data,
        });
      } catch (error) {
        setRatesData({
          state: 'error',
        });
      }
    };
    setTimeout(fetchRates, 3000);
  }, []);

  return ratesData;
};
