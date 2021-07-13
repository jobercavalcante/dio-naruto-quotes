import React from 'react';
import { QuoteContainer, QuoteText, Speaker } from './styles';
import { string, func } from 'prop-types';
import Button from './../Button';

const Quote = ({ quote, speaker, onUpdate }) => {
  return (
    <QuoteContainer>
      <QuoteText>{quote || ''}</QuoteText>
      <Speaker>{speaker || ''}</Speaker>
      <Button onClick={onUpdate}>Quote no Jutso</Button>
    </QuoteContainer>
  );
};

Quote.propTypes = {
  quote: string,
  speaker: string,
  onUpdate: func,
};
export default Quote;
