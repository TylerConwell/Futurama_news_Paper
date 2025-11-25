import React from 'react';
import coverImage from './futurama_couch.png';
import sideImage from './futurama_fry_yelling.png';
import secondaryImage from './futurama_seeing_up.png';
// import './style.css';

// -----------Tic Tac Toe logic-----------------

// make square compoent remember it was clicked and put "x"
// usestate to help it remember the value, and changes the click
import { useState } from 'react';

// indicares square component can be passed a property called value
// new step: receive value prop from board component
function Square({value, onSquareClick}) {
  // calls useState to create a value and setValue function
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );

  // change what happens whrn square clicked, board comp shows squares filled
  // needs to update the squares array in board component, by passing it down.
  // onsquareclick funct. square comp is called when clicked
}



// making a square button component, default is main function in file
function Board() {
  // returning jsx for tic tac toe board and numbering the buttons 1-9
  // square component maintains part of game state itself
  // state handeling is in the board comp. pass props to child square display right.

  // tell each square what to display by passing a prop
  // usestate declare squares state variable to store array of 9 squares
  const [squares, setSquares] = useState(Array(9).fill(null));
  // board component pass value prop to each square to render the value
  
  // handleclick function to update squares array when square clicked, updating the board state
  // creates a copy of squares array, updates first element (nextsquare)
  // to 'X', and calls setSquares to update state, re-rending the comp in square/board comp 
  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = 'X';
    setSquares(nextSquares);
  }
  // not adding the i arguement and not just the hardcoded 0
  
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>

      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
    </>
  );
}

//next step is to make the board store game logic/state in the baord componect parent not the square component

// board needs to know the state of each square to determine the winner
// store game state in board, not square what to display by passing prop



// -----------Futurama News Paper logic-----------------

// date that is going to be shown on the paper on the top h2
function Date() {
  return (
    <header className="app-date">
      <h2>Issue 39, News</h2>
      <h2>November 1, 3000</h2>
    </header>
  )
}

export { Date };



// title that is going to be shown on the paper on the top h1
function Title() {
  return (
    <header className="app-header">
      <h1>New New York News Paper</h1>
    </header>
  );
}

export { Title };



// main image that is going to be shown on the paper below the title
console.log(coverImage);
function MainImage() {
  return (
    <div className="w-full h-auto mt-2 mb-4 hd-border hd-shadow-custom bg-yellow-100 p-2">
      <img
        src={coverImage}
        alt="Futurama News Paper Cover"
        className="w-full h-auto object-cover hd-border"
      />
    </div>
  );
}

export { MainImage };



// side image for first side article
function SideImage() {
  return (
    <div className="w-full h-auto mt-2 mb-4 hd-border hd-shadow-custom bg-yellow-100 p-2">
      <img
      src={sideImage}
      alt="Futurama fry yelling Side Image"
      className="w-full h-auto object-cover hd-border"
      />
    </div>
  );
}

export { SideImage }; 



// paragraph for first side image article
function SideImageParagraph() {
  return (
    <div>
      <h2>Local Fossil Phillip J Fry yells at new new yorkers</h2>

      <p className="hd-border hd-shadow-custom bg-yellow-100 p-2">
        In a surprising turn of events, Fry was seen yelling at an unknown
        entity in the streets of New New York. Witnesses report that Fry's
        outburst was both loud and passionate, leaving many bystanders
        bewildered. Authorities are currently investigating the incident,
        see more on page 4.</p>
    </div>
  );
}

export { SideImageParagraph }; 



// secondary image for second side article
function SecondaryImage() {
  return (
    <div className="w-full h-auto mt-2 mb-4 hd-border hd-shadow-custom bg-yellow-100 p-2">
      <img
      src={secondaryImage}
      alt="Futurama fry Bender Secondary Image"
      className="w-full h-auto object-cover hd-border"
      />
    </div>
  );
}

export { SecondaryImage }; 



// paragraph for second side image article
function SecondaryImageParagraph() {
  return (
    <div>
      <h2>Local Delivery Crew Planet Express Sees Upside in Business</h2>
      
      <p className="hd-border hd-shadow-custom bg-yellow-100 p-2"> 
        The Planet Express delivery crew has reported a significant increase
        in business, citing a surge in demand for intergalactic deliveries.
        "It's been a wild ride," said Captain Zapp Brannigan. "But we're
        ready for anything the universe throws at us." More details on page 8.
      </p>
    </div>
  );
}

export { SecondaryImageParagraph };



// notation for last article to show other stories 
function OtherStories() {
  return (
    <div>
      <h2>Other Stories</h2>
      <p className="hd-border hd-shadow-custom bg-yellow-100 p-2">
        - New Robot Law Passed in New New York<br/>
        - Alien Invasion Drill Scheduled for Next Week<br/>
        - Local Cafe Introduces New Space-Themed Menu
      </p>
    </div>
  );
}

export { OtherStories };

// Default App: show the cover/main image above the board
export default function App() {
  return (
    <>
      <Date />
      <Title />
      <MainImage />
      <SideImage />
      <SideImageParagraph />
      <SecondaryImage />
      <SecondaryImageParagraph />
      <OtherStories />
      <Board />
    </>
  );
}