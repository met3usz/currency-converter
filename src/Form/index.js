import { useState } from 'react';
import { myCurrencies } from './myCurrencies';
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
} from './styled';
import { ThemeProvider } from 'styled-components';

const Form = () => {
  const [amount, setAmount] = useState('');
  const [rateName, setRateName] = useState(myCurrencies[0].name);
  const [result, setResult] = useState('');

  const calculateResult = (amount, rateName) => {
    const { avgRate } = myCurrencies.find(({ name }) => name === rateName);
    setResult({
      converted: (amount / avgRate).toFixed(2),
      name: rateName,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, rateName);
  };

  const resetUserInput = () => {
    setAmount('');
    setRateName(myCurrencies[0].name);
    setResult('');
  };

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={onFormSubmit} onReset={resetUserInput}>
        <Fieldset>
          <Clock />
          <legend>Kalkulator walut</legend>
          <Wrapper>
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
                value={rateName}
                onChange={({ target }) => setRateName(target.value)}
              >
                {myCurrencies.map((rateName) => (
                  <option key={rateName.name} value={rateName.name}>
                    {rateName.name}
                  </option>
                ))}
              </Select>
            </Paragraph>
            <section>
              <Button type="submit">Przelicz!</Button>
              <Button type="reset">Wyczyść!</Button>
            </section>
            <ParagraphItalic>
              Średni kurs walut z dnia 29.01.2023
            </ParagraphItalic>
          </Wrapper>
        </Fieldset>
      </form>
      <Result converted={result.converted} name={result.name} />
    </ThemeProvider>
  );
};

export default Form;
