import styled from 'styled-components';
const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const TooltipBody = styled.div`
  --tooltip-text-color: white;
  --tooltip-background-color: black;
  --tooltip-margin: 1px;
  --tooltip-arrow-size: 6px;

  position: absolute;
  border-radius: 4px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  font-family: sans-serif;
  line-height: 1;
  z-index: 200;
  white-space: nowrap;
  // border-radius: 0.75rem/* 12px */;

  &:before {
    content: ' ';
    left: 50%;
    border: solid transparent;
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-width: var(--tooltip-arrow-size);
    margin-left: calc(var(--tooltip-arrow-size) * -1);
  }

  /* Absolute positioning */
  &.top {
    top: calc(var(--tooltip-margin) * -1);
  }
  /* CSS border triangles */
  &.top::before {
    top: 100%;
    border-top-color: var(--tooltip-background-color);
  }

  /* Absolute positioning */
  &.right {
    left: calc(100% + var(--tooltip-margin));
    top: 50%;
    transform: translateX(0) translateY(-50%);
  }
  /* CSS border triangles */
  &.right::before {
    left: calc(var(--tooltip-arrow-size) * -1);
    top: 50%;
    transform: translateX(0) translateY(-50%);
    border-right-color: var(--tooltip-background-color);
  }

  /* Absolute positioning */
  &.bottom {
    // bottom: calc(var(--tooltip-margin) * -1);
    bottom: -60px;
  }
  /* CSS border triangles */
  &.bottom::before {
    bottom: 100%;
    border-bottom-color: var(--tooltip-background-color);
  }

  /* Absolute positioning */
  &.left {
    left: auto;
    right: calc(100% + var(--tooltip-margin));
    top: 50%;
    transform: translateX(0) translateY(-50%);
  }
  /* CSS border triangles */
  &.left::before {
    left: auto;
    right: calc(var(--tooltip-arrow-size) * -2);
    top: 50%;
    transform: translateX(0) translateY(-50%);
    border-left-color: var(--tooltip-background-color);
  }
`;

export { Wrapper, TooltipBody };
