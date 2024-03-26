import { BRAND_COLOR_OPTIONS } from '@slices/local/customization.slice';

interface SwitchProps {
  label: string;
  colors: {
    color: BRAND_COLOR_OPTIONS;
    selected: boolean;
  }[];
  onChange: (color: BRAND_COLOR_OPTIONS) => void;
}

const ColorSwitcher = ({ label, colors, onChange }: SwitchProps) => (
  <div className="flex justify-between items-center flex-1">
    <label className="text-sm font-medium">{label}</label>
    <div className="flex justify-between gap-2 items-center">
      {colors.map((colorObj, index) => (
        <button
          key={index}
          className={`w-[20px] h-[20px] rounded-full border-[1px] border-gray-400 ${colorObj.selected && 'shadow-md-blue border-theme-outline'}`}
          style={{ backgroundColor: colorObj.color }}
          onClick={() => onChange(colorObj.color)}
        ></button>
      ))}
    </div>
  </div>
);

export default ColorSwitcher;
