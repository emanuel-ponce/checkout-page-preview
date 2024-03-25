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
    <button className={`rounded-md flex focus:shadow-md flex-1 ${isSelected ? 'border-blue border-2 p-[10px]' : 'p-[11px] border border-slate '}`} onClick={onClick}>
      <div className={`${isSelected ? 'text-theme-iconBlue' : 'text-gray'}`}>{icon}</div>
      <div className="text-start ml-2">
        <h3 className="text-theme-default">{title}</h3>
        <span className="text-gray text-sm">{subtitle}</span>
      </div>
    </button>
  );
}

export default BusinessModelButton;
