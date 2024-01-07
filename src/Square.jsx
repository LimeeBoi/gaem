import { useState } from 'react';
export default function Square({ size, giveState, id }) {
  const [state, setState] = useState({
    unit: 'terrain', // class/unit this square is
    subUnit: null, // subclass/sub unit this square is
    imo: false, // is mouse over
    sa: '', // style animation
    sc: 'lightgrey'
  });
  console.log('i exist! ' + id);

  giveState((request) => { // GET DA STATE
    // if (request === 'state') { // da state for square
    //   return state;
    // } else if (request === 'setState') { // setstate for square
    //   return setState;
    // } else {
    //   console.log(`no (square ${id})`); // if i get skill issue
    // }
    if (window[request]) 
      return window[request];
    else 
      console.log('Request undefined. [square ' + id + ']')
  }); // send an function with state and setState to Board component (a waiter)
  
  const dims = (
    size === 's' ? 1.8: (
      size === 'm' ? 3: (
        size === 'b' ? 6.3: (
          size === 'o' ? 8.3:
          console.warn('wot on square size')
        )
      )
    )// dimensions (small, medium, big to vmin)
  );
  
  return (
    <div 
      className="square" 
      style={{
        padding: dims,
        border: `${dims}px solid rgb(46, 82, 173)`
      }}
    >
      <div 
        className="inner-square"
        style={{
          height: `${dims}vmin`,
          width: `${dims}vmin`,
          animation: state.sa,
          backgroundColor: state.sc
        }}
        onMouseEnter={() => {
          setState({
            ...state,
            imo: true,
            sa: 'fade-in .25s ease-in',
            sc: 'lightblue'
          })
        }}
        onMouseLeave={() => {
          setState({
            ...state,
            imo: false,
            sa: 'fade-out .25s ease-in',
            sc: 'lightgrey'
          })
        }}
      />
    </div>
  );
}