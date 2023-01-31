import './style.css';

const Result = ({ converted, name }) => (
  <div className="result">
    <p className="result__paragraph">Kwota po przeliczeniu:</p>
    <span className="result__span">
      {converted} {name}
    </span>
  </div>
);

export default Result;
