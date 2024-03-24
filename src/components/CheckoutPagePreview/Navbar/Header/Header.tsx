import HeaderBrand from "./HeaderBrand/HeaderBrand";
import HeaderLinks from "./HeaderLinks/HeaderLinks";


function Header() {

  return (
    <div className="flex justify-between w-full">
      <HeaderBrand />
      <HeaderLinks />
    </div>
  );
}

export default Header;
