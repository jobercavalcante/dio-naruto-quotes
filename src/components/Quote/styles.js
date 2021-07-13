import styled from 'styled-components';

export const QuoteContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const QuoteText = styled.p`
  font-size: 2rem;
  margin: 0;
`;

export const Speaker = styled(QuoteText)`
  text-align: right;
  margin-bottom: 50px;
`;
