import { useState } from 'react';
import Result from '../Result';
import Clock from './Clock';
import {
  Button,
  Fieldset,
  Input,
  Paragraph,
  ParagraphItalic,
  Select,
  theme,
  Wrapper,
  Loading,
  Failure,
} from './styled';
import { ThemeProvider } from 'styled-components';

import { useRatesData } from './useRatesData';

const Form = () => {
  const ratesData = useRatesData();

  const calculateResult = (amount, currency) => {
    const rate = ratesData.rates[currency];

    setResult({ sourceAmount: +amount, targetAmount: amount * rate, currency });
  };

  const [currency, setCurrency] = useState('EUR');
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState('');

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, currency);
  };

  const resetUserInput = () => {
    setAmount('');
    setResult('');
  };

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={onFormSubmit} onReset={resetUserInput}>
        <Fieldset>
          <legend>Kalkulator walut</legend>
          <Clock />
          <Wrapper>
            {ratesData.state === 'loading' ? (
              <Loading>Sekundka...</Loading>
            ) : ratesData.state === 'error' ? (
              <Failure>Coś nie ten tego</Failure>
            ) : (
              <>
                <Paragraph>
                  <label htmlFor="cost">Wpisz kwotę w PLN:</label>
                  <Input
                    type="number"
                    name="cost"
                    min="1"
                    required
                    placeholder="PLN"
                    step="0.01"
                    value={amount}
                    onChange={({ target }) => setAmount(target.value)}
                  />
                </Paragraph>
                <Paragraph>
                  <label htmlFor="rate">Wybierz walutę:</label>
                  <Select
                    value={currency}
                    onChange={({ target }) => setCurrency(target.value)}
                  >
                    {Object.keys(ratesData.rates).map((currency) => (
                      <option key={currency} value={currency}>
                        {currency}
                      </option>
                    ))}
                  </Select>
                </Paragraph>
                <section>
                  <Button type="submit">Przelicz!</Button>
                  <Button type="reset">Wyczyść!</Button>
                </section>
                <ParagraphItalic>
                  Średni kurs walut z dnia <strong>{ratesData.date}</strong>
                </ParagraphItalic>
              </>
            )}
          </Wrapper>
        </Fieldset>
      </form>
      <Result targetAmount={result.targetAmount} currency={result.currency} />
    </ThemeProvider>
  );
};

export default Form;
