import React from 'react';

const useOutsideClick = (ref: any, callback: any) => {
  const handleClickOutside = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  const handleHideDropdown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      callback();
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleHideDropdown, true);
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('keydown', handleHideDropdown, true);
      document.removeEventListener('click', handleClickOutside, true);
    };
  });
};

export default useOutsideClick;
