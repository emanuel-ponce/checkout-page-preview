import { Listbox } from '@headlessui/react';
import { WithTranslation } from 'next-i18next';
import Flag from 'react-flagkit';
import { withTranslation } from 'react-i18next';
import { IoIosArrowDown } from 'react-icons/io';
import { LOCATIONS_ENUM } from 'shared/enums/locations.enum';
import { loadTranslations } from './i18n/translations';
import i18n from 'shared/i18n/i18n.config';
loadTranslations(i18n);
interface LocationOption {
  value: LOCATIONS_ENUM;
  label: string;
}

interface LocationDropdownProps extends WithTranslation {
  selectedLocation: LOCATIONS_ENUM;
  options: LocationOption[];
  onChange: (optionSelected: LOCATIONS_ENUM) => void;
}

function LocationDropdown({ t, selectedLocation, onChange, options }: LocationDropdownProps) {
  return (
    <div className="border border-gray/20 rounded-[4px] px-2 py-1 flex items-center gap-2 relative h-full focus:shadow-md">
      <div className="text-gray font-medium text-sm ">{t('LOCATION_DROPDOWN.LABEL')}</div>
      <div className="border-r-[2px] border-r-gray/70 h-3"></div>
      <Listbox value={selectedLocation} onChange={onChange}>
        <Listbox.Button>
          <div className="flex gap-2 items-center">
            <Flag country={selectedLocation.toUpperCase()} size={15} />
            <span className="text-sm font-medium">{options.find(option => option.value === selectedLocation)?.label}</span>
            <IoIosArrowDown className="text-gray" />
          </div>
        </Listbox.Button>
        <Listbox.Options className="absolute z-10 py-1 mt-1 overflow-auto text-base bg-white shadow-lg " style={{ top: '100%', left: '50%' }}>
          {options.map(option => (
            <Listbox.Option key={option.value} value={option.value} className="flex items-center px-2 py-2 cursor-pointer">
              <Flag country={option.value.toUpperCase()} size={15} className="mr-2" />
              <span className="text-sm">{option.label}</span>
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
}

export default withTranslation()(LocationDropdown);
