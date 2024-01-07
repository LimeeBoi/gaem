import { useState } from 'react';
export default function Form({ labels, inputIds, handler }) {
  const [inputVals, setInputVals] = useState(labels.map(() => 0));
  function handleChange(value, index) {
    const nextInputVals = inputVals.map((c, i) => {
      if (i === index) {
        return value;
      }
      else {
        return c;
      }
    }) 
    setInputVals(nextInputVals);
  }

  return (
    <form 
      className="form-list"
      onSubmit={e => {
        e.preventDefault();
        for (let i in inputIds) {
          handler(inputIds[i], inputVals[i]);
        }
      }}
    >
      {labels.map((label, index) =>
        <div key={inputIds[index]} className="form">
          <label>{label}</label>
          <br/>
          <input onChange={e => {handleChange(e.target.value, index)}}/>
        </div>
      )}
      <button className="form-submit">Update</button>
    </form>
  );
}