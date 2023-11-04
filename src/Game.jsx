import Board from './Board';
export default function Game() {
  function getObj(obj) {
    console.log(obj);
  }
  return (
    <div className="game">
      <Board size="s" getState={getObj}/>
    </div>
  )
}