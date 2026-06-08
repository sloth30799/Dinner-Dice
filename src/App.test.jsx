import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders the modern CraveRoll workflow', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /craveroll/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /roll the crave/i })).toBeInTheDocument();
  expect(screen.getByText(/tonight’s crave roll/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /favorites/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /grocery list/i })).toBeInTheDocument();
});

test('can add the current dinner idea to the plan', async () => {
  render(<App />);
  await userEvent.click(screen.getByRole('button', { name: /add to plan/i }));
  expect(screen.getByRole('button', { name: /in plan/i })).toBeInTheDocument();
});
