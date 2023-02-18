import { useState, useEffect } from 'react';
import axios from 'axios';

export const useRatesData = () => {
  const url = 'https://api.exchangerate.host/latest?base=PLN';
  const [ratesData, setRatesData] = useState({ state: 'loading' });

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get(url);
        setRatesData({
          state: 'success',
          rates: response.data.rates,
          date: response.data.date,
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
