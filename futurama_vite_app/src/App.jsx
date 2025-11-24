import React from 'react';

// make square compoent remember it was clicked and put "x"
// usestate to help it remember the value, and changes the click
import { useState } from 'react';

// indicares square component can be passed a property called value
// new step: receive value prop from board component
function Square({value}) {
  // calls useState to create a value and setValue function
  return <button className="square">{value}</button>;

  //const [value, setValue] = useState(null);
  // making interactive "x" component function, fill in with x when clicked
//   function handleClick() {
//     setValue('X');
//   }

//   return (
//     <button 
//       className="square" 
//       onClick={handleClick}
//     >
//       {value}
//     </button>
//   );
}



// making a square button component, default is main function in file
export default function Board() {
  // returning jsx for tic tac toe board and numbering the buttons 1-9
  // square component maintains part of game state itself

  // tell each square what to display by passing a prop
  // usestate declare squares state variable to store array of 9 squares
  const [squares, setSquares] = useState(Array(9).fill(null));
  // board component pass value prop to each square to render the value
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]}/>
        <Square value={squares[1]}/>
        <Square value={squares[2]}/>
      </div>
      
      <div className="board-row">
        <Square value={squares[3]}/>
        <Square value={squares[4]}/>
        <Square value={squares[5]}/>
      </div>

      <div className="board-row">
        <Square value={squares[6]}/>
        <Square value={squares[7]}/>
        <Square value={squares[8]}/>
      </div>
    </>
  );
}

//next step is to make the board store game logic/state in the baord componect parent not the square component

// board needs to know the state of each square to determine the winner
// store game state in board, not square what to display by passing prop
