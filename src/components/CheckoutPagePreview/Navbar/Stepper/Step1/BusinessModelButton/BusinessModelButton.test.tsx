import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import BusinessModelButton from './BusinessModelButton';
import { BsBoxFill } from 'react-icons/bs';

describe('BusinessModelButton', () => {
  const onClickMock = jest.fn();

  beforeEach(() => {
    onClickMock.mockClear();
  });

  it('calls onClick function when button is clicked', () => {
    render(<BusinessModelButton onClick={onClickMock} isSelected={false} title="Test Title" subtitle="Test Subtitle" icon={<BsBoxFill />} />);

    const button = screen.getByRole('button');

    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('renders correctly when isSelected is true', () => {
    render(<BusinessModelButton onClick={onClickMock} isSelected={true} title="Test Title" subtitle="Test Subtitle" icon={<BsBoxFill />} />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('border-blue-400');
    expect(button).toHaveTextContent('Test Title');
    expect(button).toHaveTextContent('Test Subtitle');
  });

  it('renders correctly when isSelected is false', () => {
    render(<BusinessModelButton onClick={onClickMock} isSelected={false} title="Test Title" subtitle="Test Subtitle" icon={<BsBoxFill />} />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('border-gray-400');
    expect(button).toHaveTextContent('Test Title');
    expect(button).toHaveTextContent('Test Subtitle');
  });
});
