import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FileInputButton from '../../components/FileInputButton';

describe('FileInputButton Component', () => {
  const testLabel = 'Upload File';
  const testHtmlFor = 'file-upload';

  it('renders the button with the correct label', () => {
    render(<FileInputButton label={testLabel} htmlFor={testHtmlFor} />);
    const buttonElement = screen.getByText(testLabel);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute('for', testHtmlFor);
  });

  it('applies the correct class name', () => {
    render(<FileInputButton label={testLabel} htmlFor={testHtmlFor} />);
    const buttonElement = screen.getByText(testLabel);
    expect(buttonElement).toHaveClass('button');
  });
});
