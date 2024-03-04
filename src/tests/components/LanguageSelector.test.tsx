import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LanguageSelector from '../../components/LanguageSelector';
import { jest } from '@jest/globals';

describe('LanguageSelector Component', () => {
  it('renders correctly with default language', () => {
    render(<LanguageSelector />);
    const selector = screen.getByRole('combobox');
    expect(selector).toHaveValue('zh');
  });

  it('changes language when a different option is selected', () => {
    const mockOnLanguageChange = jest.fn();
    render(<LanguageSelector onLanguageChange={mockOnLanguageChange} />);

    const selector = screen.getByRole('combobox');
    fireEvent.change(selector, { target: { value: 'en' } });

    expect(mockOnLanguageChange).toHaveBeenCalledWith('en');
  });

  it('is disabled when isDisabled is true', () => {
    render(<LanguageSelector isDisabled={true} />);
    const selector = screen.getByRole('combobox');
    expect(selector).toBeDisabled();
  });
});
