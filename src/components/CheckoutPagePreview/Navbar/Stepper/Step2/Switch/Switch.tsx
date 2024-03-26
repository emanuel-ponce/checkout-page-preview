import { forwardRef } from 'react';
import { FaCircle } from 'react-icons/fa';

interface SwitchInputProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface SwitchProps extends SwitchInputProps {
  label: string;
}

const SwitchInput = forwardRef<HTMLInputElement, SwitchInputProps>((props, ref) => (
  <label className="cursor-pointer">
    <input type="checkbox" className="hidden" ref={ref} {...props} />
    <div className={`w-7 rounded-full focus:shadow-md-blue ${props.checked ? 'bg-blue-400' : 'bg-gray-400'}`}>
      <div className={`w-fit shadow-sm rounded-full transition-all duration-500 text-white ${props.checked ? 'bg-blue-500 translate-x-3' : 'bg-gray-500 -rotate-180'}`}>
        <FaCircle />
      </div>
    </div>
  </label>
));

const Switch = (props: SwitchProps) => (
  <div className="flex justify-between items-center flex-1 ">
    <label className="text-sm font-medium">{props.label}</label>
    <SwitchInput {...props} />
  </div>
);

export default Switch;
