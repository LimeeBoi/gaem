import { useState } from 'react';
export default function Form({ labels, inputIds, handler }) {
  const [co, setCo] = useState(inputIds[0]); // current option
  return (
    <form className="option-list">
      {inputIds.map((inputId, index) =>
        <div 
          key={inputId} 
          className="option"
          onClick={() => {
            setCo(inputId);
            handler(inputId);
          }}
        >{labels[index]}</div>
      )}
      <div
        className="slider"
        style={{
          animation: 'dudu' + co
        }}
      />
    </form>
  );
}