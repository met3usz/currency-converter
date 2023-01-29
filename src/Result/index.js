import './style.css';

const Result = ({ result }) => {
  <div className="result">
    {result !== '' && (
      <>
        <p className="result__paragraph">
          Kwota po przeliczeniu:{' '}
          <span className="result__span">{result.converted}</span>{' '}
          {result.rateName}
        </p>
      </>
    )}
  </div>;
};

export default Result;
