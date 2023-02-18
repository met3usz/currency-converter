import { ResultWrapper, ResultSpan } from './styled';

const Result = ({ targetAmount, currency }) => (
  <ResultWrapper>
    {targetAmount !== undefined && (
      <>
        <p className="result__paragraph">Kwota po przeliczeniu:</p>
        <ResultSpan>
          {targetAmount.toFixed(2)} {currency}
        </ResultSpan>
      </>
    )}
  </ResultWrapper>
);

export default Result;
