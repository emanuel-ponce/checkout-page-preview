import { beforeStep } from '@slices/local/stepper.slice';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useAppDispatch } from 'store';

interface BackButtonProps {}

function BackButton({}: BackButtonProps) {
  const dispatch = useAppDispatch();
  return (
    <div className="self-end">
      <button className="bg-blue text-white px-3 py-2 rounded-[4px] flex items-center gap-3" onClick={() => dispatch(beforeStep())}>
        <FaChevronLeft className="h-[12px] w-[7px] text-sm" />
        <span className="text-sm font-medium">Back</span>
      </button>
    </div>
  );
}

export default BackButton;
