// now the function square that makes each button and takes in a value prop
function Square({value}) {
  return <button className="square">{value}</button>;
}

// making a square button component, default is main function in file
export default function Board() {
  // returning jsx for tic tac toe board
  // and numbering the buttons 1-9
  return (
    <>
      <div className="board-row">
        <Square value="1"/>
        <Square value="2"/>
        <Square value="3"/>
      </div>

      <div className="board-row">
        <Square value="4"/>
        <Square value="5"/>
        <Square value="6"/>
      </div>

      <div className="board-row">
        <Square value="7"/>
        <Square value="8"/>
        <Square value="9"/>
      </div>
    </>
  );
}

