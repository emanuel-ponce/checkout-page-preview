import DeviceSelector from './DeviceSelector/DeviceSelector';
import { useAppDispatch, useAppSelector } from 'store';
import { selectDeviceSelected, selectLocationSelected, setDevice, setLocation } from '@slices/local/preview.slice';
import LocationDropdown from './LocationDropdown/LocationDropdown';
import { LOCATIONS_ENUM } from '@shared/enums/locations.enum';
import useHandheldDetector from '@shared/hooks/useHandheldDetector/useHandheldDetector';
import { useEffect } from 'react';
import { DEVICES_OPTIONS_ENUM } from '@shared/enums/devicesOptions.enum';

interface Step3Props {}

function Step3({}: Step3Props) {
  const dispatch = useAppDispatch();
  const deviceSelected = useAppSelector(selectDeviceSelected);
  const locationSelected = useAppSelector(selectLocationSelected);
  const isHandheld = useHandheldDetector();
  const locationOptions = [
    { value: LOCATIONS_ENUM.ESPAÑA, label: 'España' },
    { value: LOCATIONS_ENUM.UNITED_STATES, label: 'United States' }
  ];
  useEffect(() => {
    isHandheld && dispatch(setDevice(DEVICES_OPTIONS_ENUM.MOBILE));
  }, [isHandheld]);

  return (
    <div className="flex gap-3 h-[35px] mobile-l:flex-col mobile-l:items-center mobile-l:mt-4">
      <div className="h-full tablet-m:hidden">
        <DeviceSelector optionSelected={deviceSelected} onChange={device => dispatch(setDevice(device))} />
      </div>
      <div className="h-full">
        <LocationDropdown options={locationOptions} selectedLocation={locationSelected} onChange={location => dispatch(setLocation(location))} />
      </div>
    </div>
  );
}

export default Step3;
