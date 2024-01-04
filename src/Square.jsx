import { useState } from 'react';
export default function Square({ size, getState, id }) {
  const [state, setState] = useState({
    isMouseOver: false, // *IS MOUSE OVER
    unit: 'terrain', // class/unit this square is
    subUnit: null, // subclass/sub unit this square is
    id: id // *ID*
  });

  getState((request, id) => {
    if (id === state.id) {
      if (request === 'state') {
        return state;
      } else if (request === 'setState') {
        return setState;
      } else {
        console.log('no (square)');
      }
    }
  }); // send an function with state and setState to Board component (a waiter)

  const dims = (size === 's' ? 25 : (size === 'm' ? 50 : (size === 'b' ? 75 : console.warn('wot on square size'))));
  // dimensions (small, medium, big to 25, 50, 75px)
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
        onMouseEnter={() => {setState({...state, isMouseOver: true})}}
        onMouseLeave={() => {setState({...state, isMouseOver: false})}}
      />
    </div>
  );
}