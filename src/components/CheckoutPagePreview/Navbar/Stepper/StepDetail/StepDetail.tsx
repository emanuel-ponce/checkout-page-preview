import { beforeStep, nextStep, selectCurrentStep, selectTotalSteps } from '@slices/local/stepper.slice';
import { FaChevronRight } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from 'store';

interface StepDetailProps {}

function StepDetail({}: StepDetailProps) {
  const dispatch = useAppDispatch();
  const currentStep = useAppSelector(selectCurrentStep);
  const totalSteps = useAppSelector(selectTotalSteps);
  const texts = [null, 'Choose your use case', 'Customize', 'Try it out'];
  return (
    <div className={`${currentStep > 1 ? 'cursor-pointer' : ''}`} onClick={() => dispatch(beforeStep())}>
      <span className="font-medium">{texts[currentStep]}</span>
      <span className="text-xs ml-2">
        {currentStep} of {totalSteps}
      </span>
    </div>
  );
}

export default StepDetail;
