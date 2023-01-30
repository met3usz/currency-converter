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
          <legend>Kalkulator walut</legend>
          <div className="fieldset__wrapper">
            <p className="fieldset__paragraph">
              <label className="fieldset__label" htmlFor="cost">
                Wpisz kwotę w PLN:
              </label>
              <input
                className="fieldset__input"
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
            <p className="fieldset__paragraph">
              <label className="fieldset__label" htmlFor="rate">
                Wybierz walutę:
              </label>
              <select
                className="fieldset__select"
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
            <section className="fieldset__buttons">
              <input
                className="fieldset__button"
                type="submit"
                value="Przelicz!"
              />
              <input
                className="fieldset__button"
                type="reset"
                value="Wyczyść!"
                onClick={resetUserInput}
              />
            </section>
            <p className="form__paragraph--italic">
              Średni kurs walut z dnia 29.01.2023
            </p>
          </div>
        </fieldset>
      </form>
      <div className="result">
        <p className="result__paragraph">Kwota po przeliczeniu:</p>
        <span className="result__span">
          {result.converted} {result.name}
        </span>
      </div>
    </>
  );
};

export default Form;
