import styled from 'styled-components';

export const theme = {
  colors: {
    userInput: 'hsl(80, 100%, 80%)',
    inputBorder: '2px solid hsl(80, 100%, 35%)',
  },
  breakpoints: {
    mobile: 768,
  },
};

export const Fieldset = styled.fieldset`
  border-radius: 10px;
  min-width: 500px;
  border: ${({ theme }) => theme.colors.inputBorder};
  background-color: hsl(0, 0%, 100%);
  box-shadow: 10px 10px 25px 0px rgba(117, 117, 117, 1);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    min-width: 300px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-items: center;
  align-items: center;
`;

export const Paragraph = styled.p`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  outline: none;
  border: ${({ theme }) => theme.colors.inputBorder};
  border-radius: 10px;
  padding: 8px;
  max-width: 100px;
  background-color: ${({ theme }) => theme.colors.userInput};
`;

export const Select = styled.select`
  outline: none;
  border: ${({ theme }) => theme.colors.inputBorder};
  border-radius: 10px;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.userInput};
  cursor: pointer;
`;

export const Button = styled.button`
  outline: none;
  border: ${({ theme }) => theme.colors.inputBorder};
  border-radius: 10px;
  padding: 8px;
  margin: 0 5px;
  background-color: ${({ theme }) => theme.colors.userInput};
  transition: 0.5s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ParagraphItalic = styled.p`
  font-size: 14px;
  font-style: italic;
`;

export const Loading = styled.p`
  color: black;
`;

export const Failure = styled.p`
  color: crimson;
`;
