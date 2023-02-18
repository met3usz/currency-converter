import './style.css';

const Result = ({ targetAmount, currency }) => (
  <div className="result">
    {targetAmount !== undefined && (
      <>
        <p className="result__paragraph">Kwota po przeliczeniu:</p>
        <span className="result__span">
          {targetAmount.toFixed(2)} {currency}
        </span>
      </>
    )}
  </div>
);

export default Result;
