import { ReactElement } from 'react';
import { BsBoxFill } from 'react-icons/bs';

interface BusinessModelButtonProps {
  onClick: () => any;
  isSelected: boolean;
  title: string;
  subtitle: string;
  icon: ReactElement;
}

function BusinessModelButton({ onClick, isSelected, title, subtitle, icon }: BusinessModelButtonProps) {
  return (
    <button className={`rounded-md flex focus:shadow-md-blue flex-1 ${isSelected ? 'border-blue-400 border-2 p-[10px]' : 'p-[11px] border border-gray-400 '}`} onClick={onClick}>
      <div className={`${isSelected ? 'text-theme-iconBlue' : 'text-gray-500'}`}>{icon}</div>
      <div className="text-start ml-2">
        <h3 className="text-theme-default">{title}</h3>
        <span className="text-gray-500 text-sm">{subtitle}</span>
      </div>
    </button>
  );
}

export default BusinessModelButton;
