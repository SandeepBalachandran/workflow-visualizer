import React from 'react';

type Props = {
  initialIsVisible: boolean;
};

const useComponentVisible = ({ initialIsVisible }: any) => {
  const [isComponentVisible, setIsComponentVisible] = React.useState(initialIsVisible);
  const ref = React.useRef<any>(null);
  const handleHideDropdown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsComponentVisible(false);
    }
  };

  const handleClickOutside = (event: { target: any }) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
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
  return { ref, isComponentVisible, setIsComponentVisible };
};

export default useComponentVisible;
