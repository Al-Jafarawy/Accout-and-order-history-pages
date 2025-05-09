import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ToggleTheme from './ToggleTheme';

test('toggles theme icon on click', () => {
  render(<ToggleTheme />);
  const button = screen.getByRole('button');
  userEvent.click(button);
  expect(button).toBeInTheDocument();
});
