import { BUSINESS_MODEL_TYPES_ENUM, selectSelectedBusinessModel } from '@slices/local/businessModel.slice';
import { nextStep, selectCurrentStep } from '@slices/local/stepper.slice';
import { FaChevronRight } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from 'store';

interface NextButtonProps {}

function NextButton({}: NextButtonProps) {
  const dispatch = useAppDispatch();
  const selectedBusinessModel = useAppSelector(selectSelectedBusinessModel);
  return (
    <div className="self-end">
      <button
        className="bg-blue text-white px-3 py-2 rounded-[4px] flex items-center gap-3 disabled:bg-gray disabled:cursor-no-drop"
        onClick={() => dispatch(nextStep())}
        disabled={selectedBusinessModel === BUSINESS_MODEL_TYPES_ENUM.RECURRING_PAYMENT}
      >
        <span className="text-sm font-medium">Next</span>
        <FaChevronRight className="h-[12px] w-[7px] text-sm" />
      </button>
    </div>
  );
}

export default NextButton;
