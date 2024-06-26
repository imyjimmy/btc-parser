import React from 'react';

function TxnIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return React.createElement('svg', Object.assign({
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), 
    title ? React.createElement('title', 
    { id: titleId }, title) : null,
    React.createElement('path', {
      d: "M22,9H19V2a1,1,0,0,0-1.6-.8L15.33,2.75C12.21.42,13.1.42,10,2.75,6.89.42,7.77.42,4.66,2.75L2.6,1.2A1,1,0,0,0,1,2V20a3,3,0,0,0,3,3H20a3,3,0,0,0,3-3V10A1,1,0,0,0,22,9ZM4,21a1,1,0,0,1-1-1V4c2,1.47,1.41,1.44,4.33-.75,3.1,2.33,2.22,2.33,5.33,0,3,2.24,2.42,2.19,4.34.75,0,16.75-.08,16.3.17,17Zm17-1a1,1,0,0,1-2,0V11h2Z"
    }),
    React.createElement('path', {
      d: "M6,10H9A1,1,0,0,0,9,8H6A1,1,0,0,0,6,10Z"
    }),
    React.createElement('path', {
      d: "M14,12H6a1,1,0,0,0,0,2h8A1,1,0,0,0,14,12Z"
    }),
    React.createElement('path', {
      d: "M14,16H6a1,1,0,0,0,0,2h8A1,1,0,0,0,14,16Z"
    })
  );
}

const TransactionIcon = React.forwardRef(TxnIcon);

export { TransactionIcon }
