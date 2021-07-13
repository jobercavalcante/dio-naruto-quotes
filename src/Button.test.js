import { render, screen } from '@testing-library/react';
import Button from './components/Button';

test('renders the button wit text', () => {
  render(<Button>Test</Button>);

  const buttonEl = screen.getByText('Test');

  expect(buttonEl).toBeInTheDocument();
});
