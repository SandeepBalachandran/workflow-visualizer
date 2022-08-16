import { NextPage } from 'next';
import React from 'react';
import { Wrapper, TooltipBody } from '../../../styles/style';

type tooltipProps = {
  delay?: number;
  direction: string;
  content: React.ReactNode;
  children: React.ReactNode;
};

const Tooltip = ({ delay = 200, direction = 'top', content, children }: tooltipProps) => {
  let timeout: any;
  const [active, setActive] = React.useState(false);
  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };
  return (
    <>
      <Wrapper onMouseEnter={showTip} onMouseLeave={hideTip}>
        {children}
        {active && (
          <TooltipBody className={`Tooltip-Tip ${direction}  shadow-lg  bg-black text-white p-3`}>
            {content}
          </TooltipBody>
        )}
      </Wrapper>
    </>
  );
};

export default Tooltip;
