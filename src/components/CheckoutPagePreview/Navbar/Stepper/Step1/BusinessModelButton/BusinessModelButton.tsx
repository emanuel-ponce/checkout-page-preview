import { BsBoxFill } from "react-icons/bs";

function BusinessModelButton() {

    return (
      <button className="p-[10px] border-[2px] rounded-md border-blue flex">
        <BsBoxFill className="mt-1 w-[12px] h-[17px] text-theme-iconBlue"/>  
        <div className="text-start ml-2">
          <h3 className="text-theme-default">One-time payments</h3>
          <span className="text-gray text-sm">Digital or physical goods and services</span>
        </div>
      </button>
    );
  }
  
  export default BusinessModelButton;
  