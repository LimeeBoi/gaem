import Board from './Board';
import Slider from './Slider';
import { useState } from 'react';
export default function Game() {
  const [state, setState] = useState({
    size: 's'
  });
  function getState(obj) {
    setState({
      ...state,
      obj,
    });
  }

  const handler = (val) => {
    setState({
      ...state,
      size: val
    }); 
  }
  
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
        size={state.size} 
        giveState={getState}
      />
      <Slider
        handler={handler}
        inputIds={['s', 'm', 'b', 'o']}
        labels={[ 'Small', 'Medium', 'Big', 'Obese']}
      />
    </div>
  );
}