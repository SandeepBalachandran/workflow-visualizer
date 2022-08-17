import React from 'react';
import useComponentVisible from '../../../helpers/checkOutsideclick';

type dropdownProps = {
  menuLabel: string;
  children: React.ReactNode;
};
const Dropdown = (props: dropdownProps) => {
  const [visible, setVisibility] = React.useState(false);
  const menuClick = () => {
    setVisibility(!visible);
    setIsComponentVisible(!visible);
  };
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(true);
  return (
    <>
      <div className="relative  z-[220]">
        <div
          className="px-4 py-3 md:py-0  cursor-pointer relative  ease-in duration-100 hover:scale-125"
          onClick={menuClick}
        >
          {props.menuLabel}
        </div>
        {isComponentVisible && (
          <div
            className="w-max top-10 absolute bg-white rounded shadow-lg max-h-[300px] max-w-[300px] overflow-auto animate-dropdown"
            ref={ref}
          >
            {props.children}
          </div>
        )}
      </div>
    </>
  );
};

export default Dropdown;
