import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 400px;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;

  @media (min-width: 350px) {
    max-width: 300px;
  }

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`;

export const Nav = styled.div`
  // position: fixed;
  width: 100%;
  z-index: 40;
  top: 0;
`;

export const RightItemsContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2rem;
  justify-content: space-between;
  column-gap: 1.5rem;

  .nav-item {
    border-bottom: 1px solid #fff;
    padding: 0.2rem;
    color: #fff;
    // margin: 0 1rem;
  }
  .icon {
    font-size: 2.5rem;
  }
`;

export const Main = styled.div`
  // padding: 10px 5% 0;
  margin: auto;
  max-width: 100%;
  background: #155bd5;
  color: #fff;
  min-height: 100vh;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const TooltipBody = styled.div`
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
    /* top: calc(var(--tooltip-margin) * -1); */
    top: -50px;
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

export const ToastBody = styled.div`
  position: fixed;
  z-index: 555;
  &.top-right {
    top: 12px;
    right: 12px;
    transition: transform 0.6s ease-in-out;
    animation: toast-in-right 0.7s;
  }

  &.bottom-right {
    bottom: 12px;
    right: 12px;
    transition: transform 0.6s ease-in-out;
    animation: toast-in-right 0.7s;
  }

  &.top-left {
    top: 12px;
    left: 12px;
    transition: transform 0.6s ease-in;
    animation: toast-in-left 0.7s;
  }

  &.bottom-left {
    bottom: 12px;
    left: 12px;
    transition: transform 0.6s ease-in;
    animation: toast-in-left 0.7s;
  }
  &.top-center {
    top: 1em;
    left: 50%;
    transform: translateX(-50%);
    transition: transform 0.6s ease-in;
    animation: bounceInDown 0.7s;
  }

  @keyframes toast-in-right {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes toast-in-left {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes bounceInDown {
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
      opacity: 0;
      transform: translate3d(0, -3000px, 0);
    }
    60% {
      opacity: 1;
      transform: translate3d(0, 25px, 0);
    }
    75% {
      transform: translate3d(0, -10px, 0);
    }
    90% {
      transform: translate3d(0, 5px, 0);
    }
    to {
      transform: none;
    }
  }
`;
