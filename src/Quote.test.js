import { render, screen, fireEvent } from '@testing-library/react';
import Quote from './components/Quote';

const quote = 'test quote';
const speaker = '- Some speaker';

test('renders received quote, speaker and a button', () => {
  render(<Quote quote={quote} speaker={speaker} />);

  const buttonEl = screen.getByRole('button');
  const quoteEl = screen.getByText(quote);
  const speakerEl = screen.getByText(speaker);

  expect(buttonEl).toBeInTheDocument();
  expect(quoteEl).toBeInTheDocument();
  expect(speakerEl).toBeInTheDocument();
});

test('Calls a callback when button is pressed', () => {
  const callback = jest.fn();
  render(<Quote quote={quote} speaker={speaker} onUpdate={callback} />);
  const buttonEl = screen.getByRole('button');

  fireEvent.click(buttonEl);

  expect(callback).toHaveBeenCalledTimes(1);
});
