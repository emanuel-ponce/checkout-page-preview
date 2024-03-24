import { FaAngleRight, FaChevronRight } from "react-icons/fa";
import BusinessModelButton from "./Step1/BusinessModelButton/BusinessModelButton";

function Stepper() {

  return (
    <div className="pb-6">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold my-[14px]">Explore Checkout</h1>
        <div className="flex flex-1 justify-between">
          <div>
            <span className="font-medium">Choose your use case</span>
            <span className="text-xs ml-2">1 of 3</span>
          </div>
          <div className="flex  gap-3">
            <BusinessModelButton />
            <BusinessModelButton />
          </div>
          <div className="self-end">
            <button className="bg-blue text-white px-3 py-2 rounded-[4px] flex items-center gap-3">
              <span className="text-sm font-medium">Next</span>
              <FaChevronRight className="h-[12px] w-[7px] text-sm"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stepper;
