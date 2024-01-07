import { useState } from 'react';
export default function Square({ size, giveState, id }) {
  const [state, setState] = useState({
    unit: 'terrain', // class/unit this square is
    subUnit: null, // subclass/sub unit this square is
  });
  console.log('i exist! ' + id);

  let isMouseOver = false;
  giveState((request) => { // GET DA STATE
    if (request === 'state') { // da state for square
      return {
        ...state,
        isMouseOver
      }
    } else if (request === 'setState') { // setstate for square
      return setState;
    } else {
      console.log(`no (square ${id})`); // if i get skill issue
    }
  }); // send an function with state and setState to Board component (a waiter)
  
  const dims = (size === 's' ? 2 : (size === 'm' ? 4 : (size === 'b' ? 8 : console.warn('wot on square size'))));
  // dimensions (small, medium, big to 25, 50, 75px)
  return (
    <div 
      className="square" 
      style={{
        padding: dims
      }}
    >
      <div 
        className="inner-square"
        style={{
          height: `${dims}vmin`,
          width: `${dims}vmin`
        }}
        onMouseEnter={() => {isMouseOver = true}}
        onMouseLeave={() => {isMouseOver = false}}
      />
    </div>
  );
}