import React from 'react';

// make square compoent remember it was clicked and put "x"
// usestate to help it remember the value, and changes the click
import { useState } from 'react';

// indicares square component can be passed a property called value
function Square() {
  // calls useState to create a value and setValue function
  const [value, setValue] = useState(null);

  // making interactive "x" component function, fill in with x when clicked
  function handleClick() {
    setValue('X');
  }

  return (
    <button 
      className="square" 
      onClick={handleClick}
    >
      {value}
    </button>
  );
}



// making a square button component, default is main function in file
export default function Board() {
  // returning jsx for tic tac toe board and numbering the buttons 1-9
  // square component maintains part of game state itself
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>

      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
// board needs to know the state of each square to determine the winner
// store game state in board, not square what to display by passing prop
