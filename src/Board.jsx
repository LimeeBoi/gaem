import { useState } from 'react';
import Square from './Square';
export default function Board({ size, getState }) {
  const [state, setState] = useState({
    isSpaceDown: false
  });
  getState(state);
  const dims = (size === 's' ? [12, 7] : (size === 'm' ? [18, 10] : (size === 'b' ? [36, 20] : console.warn('wot on square size'))));
  const squareSize = (size === 's' ? 'b' : (size === 'm' ? 'm' : (size === 'b' ? 's' : console.warn('wot on square size conver'))));
  let xArr = [];
  let yArr = [];
  for (let i = 0; i < dims[1]; i++) 
    yArr.push(i);
  for (let i = 0; i < dims[0]; i++) {
    xArr.push({
      el: yArr,
      id: i
    });
  }

  window.addEventListener('keydown', e => { 
    if (e.key === ' ' && e.target === document.body) {
      e.preventDefault();
      setState({
        ...state,
        isSpaceDown: true
      })
    }
  });
  window.addEventListener('keyup', e => {
    if (e.key === ' ' && e.target === document.body) {
      setState({
        ...state,
        isSpaceDown: true
      });
    }
  });

  return (
    <div className="board">
      {xArr.map(ids => 
        <div className="board-column" key={ids.id}>
          {ids.el.map(id => 
            <Square 
              size={squareSize}
              key={id} 
              id={`${ids.id} ${id}`} 
              isSpaceDown={state.isSpaceDown}
            />
          )}
        </div>
      )}
    </div>
  )
}