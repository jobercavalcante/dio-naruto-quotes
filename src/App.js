import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import narutoImg from '../src/images/naruto.png';
import Quote from './components/Quote';
import { getQuote } from '../src/services/quoteService';
import jutsuSound from './sounds/src_sounds_jutso.mp3';
import jsonQuotes from './data/quotes.json';
import raseganGif from './images/rasengan.gif';

const audio = new Audio(jutsuSound);

function App() {
  const isMounted = useRef(true);
  useEffect(() => {
    onUpdate();
    return () => {
      isMounted.current = false;
    };
  }, []);

  const [quoteState, setquoteState] = useState({
    quote: '',
    speaker: '',
  });

  const onUpdate = async () => {
    setquoteState({
      quote: '',
      speaker: '',
    });
    if (isMounted.current) {
      audio.play();
    }

    try {
      const quoteResponse = await getQuote();
      setquoteState(quoteResponse);
    } catch (e) {
      getQuotesFromJson();
    }
  };
  function getQuotesFromJson() {
    const indice = getRandomArbitrary(0, jsonQuotes.length - 1);
    setquoteState(jsonQuotes[indice]);
  }

  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  return (
    <Container>
      {quoteState.quote ? (
        <Quote {...quoteState} onUpdate={onUpdate} />
      ) : (
        <QuoteContainer>
          <img src={raseganGif} alt="" />
        </QuoteContainer>
      )}
      <NarutoImage src={narutoImg} alt="Naruto with a kunai" />
    </Container>
  );
}

export default App;

const Container = styled.div`
  margin: 0;
  display: flex;
  height: 100vh;
  width: 100%;
  padding: 0 50px;
  justify-content: center;
  align-items: center;
`;

export const QuoteContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NarutoImage = styled.img`
  max-width: 50vw;
  align-self: flex-end;
`;
