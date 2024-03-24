import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

function HeaderLinks() {

  return (
    <div className="flex">
      <a href="https://dashboard.stripe.com/register" target="_blank" className="mr-3 text-blue font-semibold">Create account</a>
      <div className="ml-[2px] mr-3 border-r-[1px] h-[20px] border-r-slate-200"></div>
      <a href="https://docs.stripe.com/checkout/quickstart" target="_blank" className="flex items-center gap-3">
        <span className="text-blue font-semibold">
          Explore the docs
        </span> 
        <FiArrowRight className="mt-[2px] text-blue"/>
      </a>
    </div>
  );
}

export default HeaderLinks;
