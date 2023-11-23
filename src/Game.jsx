import Board from './Board';
import { useState } from 'react';
export default function Game() {
  const [state, setState] = useState({});
  function getState(obj) {
    setState({
      ...state,
      obj
    });
  }

  console.log(state.board)

  // window.addEventListener('keydown', e => { 
  //   if (e.key === ' ' && e.target === document.body) {
  //     e.preventDefault(); // prevent space key from scrolling
  //     isSpaceDown = true;
  //   }
  // });
  // window.addEventListener('keyup', e => {
  //   if (e.key === ' ' && e.target === document.body) {
  //     isSpaceDown = false;
  //   }
  // });
  
  return (
    <div className="game">
      <Board 
        size="s" 
        getState={getState}
      />
    </div>
  )
}