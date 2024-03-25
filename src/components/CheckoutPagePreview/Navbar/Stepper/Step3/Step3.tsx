import DeviceSelector from './DeviceSelector/DeviceSelector';
import { useAppDispatch, useAppSelector } from 'store';
import { selectDeviceSelected, selectLocationSelected, setDevice, setLocation } from '@slices/local/preview.slice';
import LocationDropdown from './LocationDropdown/LocationDropdown';
import { LOCATIONS_ENUM } from 'shared/enums/locations.enum';

interface Step3Props {}

function Step3({}: Step3Props) {
  const dispatch = useAppDispatch();
  const deviceSelected = useAppSelector(selectDeviceSelected);
  const locationSelected = useAppSelector(selectLocationSelected);
  const locationOptions = [
    { value: LOCATIONS_ENUM.ARGENTINA, label: 'Argentina' },
    { value: LOCATIONS_ENUM.UNITED_STATES, label: 'United States' }
  ];
  return (
    <div className="flex gap-3 h-[35px]">
      <div className="h-full">
        <DeviceSelector optionSelected={deviceSelected} onChange={device => dispatch(setDevice(device))} />
      </div>
      <div className="h-full">
        <LocationDropdown options={locationOptions} selectedLocation={locationSelected} onChange={location => dispatch(setLocation(location))} />
      </div>
    </div>
  );
}

export default Step3;
