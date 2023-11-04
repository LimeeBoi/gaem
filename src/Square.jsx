import { useState } from 'react';
export default function Square({ size, getId, id }) {
  const [state, setState] = useState({
    mouseOver: false,
    unit: 'terrain',
    subUnit: null,
    id: id
  });
  const dims = (size === 's' ? 25 : (size === 'm' ? 50 : (size === 'b' ? 75 : console.warn('wot on square size'))));
  return (
    <div 
      className="square" 
      style={{
        padding: dims / 5
      }}
    >
      <div 
        className="inner-square"
        style={{
          height: `${dims}px`,
          width: `${dims}px`
        }}
      />
    </div>
  )
}