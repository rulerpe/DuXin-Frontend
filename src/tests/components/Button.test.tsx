import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../../components/Button';
import { jest } from '@jest/globals';

describe('Button Component', () => {
  it('renders the button with the correct label', () => {
    render(<Button label="Test Button" onClick={() => {}} />);
    expect(
      screen.getByRole('button', { name: 'Test Button' }),
    ).toBeInTheDocument();
  });

  it('calls onClick when button is clicked', () => {
    const handleClick = jest.fn();
    render(<Button label="Clickable" onClick={handleClick} />);
    fireEvent.click(screen.getByText('Clickable'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when isDisabled is true', () => {
    render(<Button label="Disabled Button" onClick={() => {}} isDisabled />);
    expect(
      screen.getByRole('button', { name: 'Disabled Button' }),
    ).toBeDisabled();
  });

  it('shows spinner when isLoading is true', () => {
    render(<Button label="Loading" onClick={() => {}} isLoading />);
    expect(screen.getByTestId('buttonLoadingIcon')).toBeInTheDocument();
  });

  it('applies size classes correctly', () => {
    const { rerender } = render(
      <Button label="Size Test" onClick={() => {}} size="small" />,
    );
    expect(screen.getByTestId('button')).toHaveClass('button small');

    rerender(<Button label="Size Test" onClick={() => {}} size="large" />);
    expect(screen.getByTestId('button')).toHaveClass('button large');
  });
});
