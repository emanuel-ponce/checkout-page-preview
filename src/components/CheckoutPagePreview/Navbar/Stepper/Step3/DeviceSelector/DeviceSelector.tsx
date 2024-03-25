import { AiOutlineMobile } from 'react-icons/ai';
import { FaDesktop } from 'react-icons/fa';
import { DEVICES_OPTIONS_ENUM } from 'shared/enums/devicesOptions.enum';

interface DeviceSelectorProps {
  optionSelected: DEVICES_OPTIONS_ENUM;
  onChange: (device: DEVICES_OPTIONS_ENUM) => void;
}

function DeviceSelector({ optionSelected, onChange }: DeviceSelectorProps) {
  const options = [
    { icon: <FaDesktop />, value: DEVICES_OPTIONS_ENUM.DESKTOP },
    { icon: <AiOutlineMobile />, value: DEVICES_OPTIONS_ENUM.MOBILE }
  ];
  return (
    <>
      {options.map((option, index) => (
        <button
          key={option.value}
          className={`py-[7px] border border-gray/20 ${optionSelected === option.value ? 'text-theme-iconBlue' : 'text-gray/50'} ${index === 0 ? 'pl-[10px] pr-2 rounded-l-[4px] border-r-0' : 'pl-2 pr-[10px] rounded-r-[4px] border-l-0'} focus:shadow-md`}
          onClick={() => onChange(option.value)}
        >
          {option.icon}
        </button>
      ))}
    </>
  );
}

export default DeviceSelector;
