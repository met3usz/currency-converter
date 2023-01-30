import { useState } from 'react';
import './style.css';
import { myCurrencies } from './myCurrencies';

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
    <>
      <form className="form" onSubmit={onFormSubmit}>
        <fieldset className="form__fieldset">
          <legend className="form__legend">Kalkulator walut</legend>
          <p>
            <label className="form__label" htmlFor="cost">
              Wpisz kwotę w PLN:
            </label>
            <input
              className="form__input"
              type="number"
              name="cost"
              min="1"
              required
              placeholder="PLN"
              step="0.01"
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
            />
          </p>

          <p>
            <label className="form__label" htmlFor="rate">
              Wybierz walutę:
            </label>
            <select
              value={rateName}
              onChange={({ target }) => setRateName(target.value)}
            >
              {myCurrencies.map((rateName) => (
                <option key={rateName.name} value={rateName.name}>
                  {rateName.name}
                </option>
              ))}
            </select>
          </p>
          <input className="form__button " type="submit" value="Przelicz!" />
          <input
            className="form__button"
            type="reset"
            value="Wyczyść!"
            onClick={resetUserInput}
          />
          <p className="form__paragraph">Kurs walut z dnia 29.01.2023</p>
        </fieldset>
      </form>
      <div className="result">
        <p className="result__paragraph">
          Kwota po przeliczeniu:{' '}
          <span className="result__span">{result.converted}</span> {result.name}
        </p>
      </div>
    </>
  );
};

export default Form;
