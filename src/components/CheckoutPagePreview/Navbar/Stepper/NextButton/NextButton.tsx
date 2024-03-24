import { nextStep } from '@slices/local/stepper.slice';
import { FaChevronRight } from 'react-icons/fa';
import { useAppDispatch } from 'store';

interface NextButtonProps {}

function NextButton({}: NextButtonProps) {
  const dispatch = useAppDispatch();
  return (
    <div className="self-end">
      <button className="bg-blue text-white px-3 py-2 rounded-[4px] flex items-center gap-3" onClick={() => dispatch(nextStep())}>
        <span className="text-sm font-medium">Next</span>
        <FaChevronRight className="h-[12px] w-[7px] text-sm" />
      </button>
    </div>
  );
}

export default NextButton;
