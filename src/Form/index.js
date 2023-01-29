import { useState } from 'react';
import './style.css';
import Result from '../Result';

const Form = () => {
  const [cost, setCost] = useState('');
  const [rate, setRate] = useState('');
  const [result, setResult] = useState('0');

  const calculateResult = (cost, rate) => {
    return setResult(cost * rate);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(cost, rate);
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <fieldset className="form__fieldset">
        <legend className="form__legend">Kalkulator walut</legend>
        <p>
          <label className="form__label" htmlFor="cost">
            Wpisz kwotę w Euro:
          </label>
          <input
            className="form__input"
            type="number"
            name="cost"
            min="1"
            required
            step="0.01"
            value={cost}
            onChange={({ target }) => setCost(target.value)}
          />
        </p>

        <p>
          <label className="form__label" htmlFor="rate">
            Wpisz aktualny kurs Euro:
          </label>
          <input
            className="form__input"
            type="number"
            name="rate"
            min="1"
            required
            step="0.01"
            value={rate}
            onChange={({ target }) => setRate(target.value)}
          />
        </p>
        <input className="form__button " type="submit" value="Przelicz!" />
        <input className="form__button" type="reset" value="Wyczyść!" />
      </fieldset>
      <Result result={result} />
    </form>
  );
};

export default Form;
