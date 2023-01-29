import './style.css';

const Form = () => {
  return (
    <form className="form">
      <fieldset className="form__fieldset">
        <legend className="form__legend">Kalkulator walut</legend>
        <p>
          <label className="form__label" for="cost">
            Wpisz kwotę w Euro:
          </label>
          <input
            className="form__input"
            type="number"
            name="cost"
            min="1"
            required
            step="0.01"
          />
        </p>

        <p>
          <label className="form__label" for="rate">
            Wpisz aktualny kurs Euro:
          </label>
          <input
            className="form__input"
            type="number"
            name="rate"
            min="1"
            required
            step="0.01"
          />
        </p>
        <input className="form__button " type="submit" value="Przelicz!" />
        <input className="form__button" type="reset" value="Wyczyść!" />
      </fieldset>
    </form>
  );
};

export default Form;
