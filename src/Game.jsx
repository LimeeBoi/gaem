import Board from './Board';
import Form from './Form';
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

  const handler = (randomName, val) => {
    let size;
    switch (val) {
      case 'small':
        size = 's';
        break;
      case 'medium':
        size = 'm';
        break;
      case 'big':
        size = 'b';
        break;
      default:
        size = 's';
      break;
    }
    setState({
      ...state, 
      size: size
    }); 
    console.log(val)
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
  console.log('gaem:', state.size)
  return (
    <div className="game">
      <Board 
        size={state.size} 
        giveState={getState}
      />
      <Form
        handler={handler}
        inputIds={['size']}
        labels={['Size']}
      />
    </div>
  );
}