import { beforeStep, selectCurrentStep, selectTotalSteps } from '@slices/local/stepper.slice';
import { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useAppDispatch, useAppSelector } from 'store';

interface StepDetailProps {}

function StepDetail({}: StepDetailProps) {
  const dispatch = useAppDispatch();
  const currentStep = useAppSelector(selectCurrentStep);
  const totalSteps = useAppSelector(selectTotalSteps);
  const texts = ['Choose your use case', 'Customize', 'Try it out'];
  const [isOnHover, setIsOnHover] = useState(false);
  return (
    <div className={`min-w-[140px] ${currentStep > 1 ? 'cursor-pointer' : ''}`} onClick={() => currentStep > 1 && dispatch(beforeStep())} onMouseEnter={() => setIsOnHover(true)} onMouseLeave={() => setIsOnHover(false)}>
      <div className="flex items-center">
        {currentStep > 1 && <FiArrowLeft className="text-theme-iconGray mr-2" />}
        <span className="font-medium">{currentStep === 1 || !isOnHover ? texts[currentStep - 1] : 'Back'}</span>
        {(currentStep === 1 || !isOnHover) && (
          <span className="text-xs ml-2">
            {currentStep} of {totalSteps}
          </span>
        )}
      </div>
    </div>
  );
}

export default StepDetail;
