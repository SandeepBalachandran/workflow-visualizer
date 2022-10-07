import React from 'react';

export function disableMenu(event: {
  keyCode: number;
  preventDefault: () => void;
  ctrlKey: any;
  shiftKey: any;
}) {
  // console.log(event)
  if (event.keyCode == 123) {
    event.preventDefault();
    return false;
  } else if (
    (event.ctrlKey && event.shiftKey && event.keyCode == 73) ||
    (event.ctrlKey && event.shiftKey && event.keyCode == 74)
  ) {
    event.preventDefault();
  }
}

export function handelRightClick(event: { preventDefault: () => void }) {
  event.preventDefault();
}
