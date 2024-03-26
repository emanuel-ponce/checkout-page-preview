import HeaderBrand from './HeaderBrand/HeaderBrand';
import HeaderLinks from './HeaderLinks/HeaderLinks';

function Header() {
  return (
    <div className="flex justify-between w-full">
      <HeaderBrand />
      <div className="mobile-l:hidden">
        <HeaderLinks />
      </div>
    </div>
  );
}

export default Header;
