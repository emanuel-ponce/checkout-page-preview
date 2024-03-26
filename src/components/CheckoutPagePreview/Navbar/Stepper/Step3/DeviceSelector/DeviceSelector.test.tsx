import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import DeviceSelector from './DeviceSelector';
import { DEVICES_OPTIONS_ENUM } from '@shared/enums/devicesOptions.enum';

describe('DeviceSelector', () => {
  const onChangeMock = jest.fn();

  beforeEach(() => {
    onChangeMock.mockClear();
  });

  it('renders correctly with Desktop selected', () => {
    render(<DeviceSelector optionSelected={DEVICES_OPTIONS_ENUM.DESKTOP} onChange={onChangeMock} />);

    const desktopButton = screen.getByRole('button', { name: DEVICES_OPTIONS_ENUM.DESKTOP });
    const mobileButton = screen.getByRole('button', { name: DEVICES_OPTIONS_ENUM.MOBILE });

    expect(desktopButton).toBeInTheDocument();
    expect(desktopButton).toHaveClass('text-theme-iconBlue');
    expect(desktopButton).toContainHTML('<svg');

    expect(mobileButton).toBeInTheDocument();
    expect(mobileButton).toHaveClass('text-gray-500/50');
    expect(mobileButton).toContainHTML('<svg');
  });

  it('renders correctly with Mobile selected', () => {
    render(<DeviceSelector optionSelected={DEVICES_OPTIONS_ENUM.MOBILE} onChange={onChangeMock} />);

    const desktopButton = screen.getByRole('button', { name: DEVICES_OPTIONS_ENUM.DESKTOP });
    const mobileButton = screen.getByRole('button', { name: DEVICES_OPTIONS_ENUM.MOBILE });

    expect(mobileButton).toBeInTheDocument();
    expect(mobileButton).toHaveClass('text-theme-iconBlue');
    expect(mobileButton).toContainHTML('<svg');

    expect(desktopButton).toBeInTheDocument();
    expect(desktopButton).toHaveClass('text-gray-500/50');
    expect(desktopButton).toContainHTML('<svg');
  });

  it('calls onChange function when a button is clicked', () => {
    render(<DeviceSelector optionSelected={DEVICES_OPTIONS_ENUM.DESKTOP} onChange={onChangeMock} />);

    const desktopButton = screen.getByRole('button', { name: DEVICES_OPTIONS_ENUM.DESKTOP });

    fireEvent.click(desktopButton);
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(DEVICES_OPTIONS_ENUM.DESKTOP);
  });
});
