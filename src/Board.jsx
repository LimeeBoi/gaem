/*
  *DISCLAIMER*
  I am basically treating whoever is reading this code like a 5yo, so yeah.
  I have short-term memory loss (exaderated a bit)
  Ok let's go :I
*/

import { useState } from 'react';
import Square from './Square';
export default function Board({ size, getState }) {
  const [state, setState] = useState({
    objArr: [], // array of arrays of an (object and a function)
  });

  // getState(state);
  
  const dims = (size === 's' ? [12, 7] : (size === 'm' ? [18, 10] : (size === 'b' ? [36, 20] : console.warn('wot on square size'))));
  // dimensions, [x, y]
  const squareSize = (size === 's' ? 'b' : (size === 'm' ? 'm' : (size === 'b' ? 's' : console.warn('wot on square size conver'))));
  // *SIZE OF THE SQUARE*
  
  const getFunc = (func) => { // getting the stuffs from each square (the state/set state)
    let nextArr = [...state.objArr]; // get existing objArr
    if (nextArr.length < dims[0] * dims[1]) {
      nextArr.push(func); // push it to the nextArr
      // var newState = state.objArr = nextArr;
      // setState(newState);
      // setState({
      //   ...state,
      //   objArr: nextArr
      // })
      console.log(state);
    } else {
      console.log('e');
    }
    
  }

  let xArr = []; // a column of squares array
  let yArr = []; // a row of the columns array
  for (let i = 0; i < dims[1]; i++) 
    yArr.push(i); // push i
  for (let i = 0; i < dims[0]; i++) {
    xArr.push({ // push a column and i (this i is seperate from the previous i above)
      el: yArr,
      id: i
    });
  }

  return (
    <div className="board">
      {xArr.map(ids => // map the row of columns
        <div className="board-column" key={ids.id}>
          {ids.el.map(id => // map the column
            <Square 
              size={squareSize}
              key={id} 
              id={`${ids.id} ${id}`} 
              getState={getFunc}
            />
          )}
        </div>
      )}
    </div>
  )
}