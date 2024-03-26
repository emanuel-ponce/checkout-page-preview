import { MdLock } from 'react-icons/md';
import { DEVICES_OPTIONS_ENUM } from '@shared/enums/devicesOptions.enum';
interface FakeBrowserBarProps {
  url: string;
  device: DEVICES_OPTIONS_ENUM;
}

function FakeBrowserBar({ url, device }: FakeBrowserBarProps) {
  const FakeButton = () => <div className="mr-[6px] w-2 h-2 rounded-full bg-gray-500/10" />;
  const AddressBar = ({ url }: { url: FakeBrowserBarProps['url'] }) => (
    <div className="mx-[6px] flex items-center justify-center rounded-xl bg-gray-500/5 h-[20px] flex-1 text-[8px] font-semibold gap-2 text-gray-500">
      <MdLock />
      <span>{url}</span>
    </div>
  );

  return (
    <div className="bg-white h-[32px] py-[6px] px-[12px] flex items-center rounded-t-[8px]">
      {device === DEVICES_OPTIONS_ENUM.DESKTOP && (
        <div className="flex mr-8">
          <FakeButton />
          <FakeButton />
          <FakeButton />
        </div>
      )}
      <AddressBar url={url} />
    </div>
  );
}

export default FakeBrowserBar;
