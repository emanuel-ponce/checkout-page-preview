import '@testing-library/jest-dom';
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Switch from '@components/CheckoutPagePreview/Navbar/Stepper/Step2/Switch/Switch';

describe('Switch component', () => {
  it('renders correctly', () => {
    render(<Switch label="Test Switch" checked={false} onChange={() => {}} />);

    expect(screen.getByText('Test Switch')).toBeInTheDocument();
  });

  it('changes state when clicked', () => {
    const mockOnChange = jest.fn();
    render(<Switch label="Test Switch" checked={false} onChange={mockOnChange} />);

    const checkbox = screen.getByRole('checkbox');

    fireEvent.click(checkbox);

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it('renders with correct color when checked', () => {
    const { getByTestId } = render(<Switch label="Test Switch" checked={true} onChange={() => {}} />);
    const switchInput = getByTestId('switch-input');

    expect(switchInput).toHaveClass('bg-blue-400');
  });

  it('renders with correct color when not checked', () => {
    const { getByTestId } = render(<Switch label="Test Switch" checked={false} onChange={() => {}} />);
    const switchInput = getByTestId('switch-input');

    expect(switchInput).toHaveClass('bg-gray-400');
  });

  it('displays correct label', () => {
    render(<Switch label="Test Switch" checked={false} onChange={() => {}} />);

    expect(screen.getByText('Test Switch')).toBeInTheDocument();
  });
});
