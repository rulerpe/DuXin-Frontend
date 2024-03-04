import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProgressBar from '../../components/ProgressBar';

describe('ProgressBar Component', () => {
  const stages = ['Stage 1', 'Stage 2', 'Stage 3', 'Stage 4'];

  it('renders and shows correct progress for given stage', () => {
    const currentStage = 2;
    const expectedProgress = (100 / stages.length) * currentStage;

    render(<ProgressBar currentStage={currentStage} stages={stages} />);

    const progressBarFill = screen.getByTestId('progressBarFill');
    expect(progressBarFill).toHaveStyle(`width: ${expectedProgress}%`);
  });

  it('applies completion class when progress is 100%', () => {
    const currentStage = stages.length; //
    render(<ProgressBar currentStage={currentStage} stages={stages} />);

    const progressBarFill = screen.getByTestId('progressBarFill');
    expect(progressBarFill).toHaveClass('progressBarComplete');
  });

  it('does not apply completion class when progress is below 100%', () => {
    const currentStage = 1;
    render(<ProgressBar currentStage={currentStage} stages={stages} />);

    const progressBarFill = screen.getByTestId('progressBarFill');
    expect(progressBarFill).not.toHaveClass('progressBarComplete');
  });
});
