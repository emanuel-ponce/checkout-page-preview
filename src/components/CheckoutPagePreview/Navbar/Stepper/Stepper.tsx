import Step1 from './Step1/Step1';
import { useAppSelector } from 'store';
import { selectCurrentStep, selectTotalSteps } from '@slices/local/stepper.slice';
import Step3 from './Step3/Step3';
import Step2 from './Step2/Step2';
import NextButton from './NextButton/NextButton';

function Stepper() {
  const currentStep = useAppSelector(selectCurrentStep);
  const totalSteps = useAppSelector(selectTotalSteps);
  const steps = [null, Step1, Step2, Step3];
  const StepComponent = steps[currentStep];
  return (
    <div className="pb-6">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold my-[14px]">Explore Checkout</h1>
        <div className="flex flex-1 justify-between">
          <div>
            <span className="font-medium">Choose your use case</span>
            <span className="text-xs ml-2">
              {currentStep} of {totalSteps}
            </span>
          </div>
          {StepComponent && <StepComponent />}
          <NextButton />
        </div>
      </div>
    </div>
  );
}

export default Stepper;
