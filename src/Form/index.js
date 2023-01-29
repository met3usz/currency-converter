import { useState } from 'react';
import './style.css';
import Result from '../Result';
import { myCurrencies } from './myCurrencies';

const Form = () => {
  const [amount, setamount] = useState('');
  const [rateName, setRateName] = useState(myCurrencies[0].name);
  const [result, setResult] = useState('');

  const calculateResult = (amount, rateName) => {
    const { avgRate } = myCurrencies.find(({ name }) => name === rateName);
    setResult({
      converted: (amount / avgRate).toFixed(2),
      rateName,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, rateName);
  };

  const resetInput = () => {
    setamount('');
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <fieldset className="form__fieldset">
        <legend className="form__legend">Kalkulator walut</legend>
        <p>
          <label className="form__label" htmlFor="cost">
            Wpisz kwotę:
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
            onChange={({ target }) => setamount(target.value)}
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
          onClick={resetInput}
        />
      </fieldset>
      <Result result={result} />
    </form>
  );
};

export default Form;
