import React from 'react';
import coverImage from './futurama_couch.png';
import sideImage from './futurama_fry_yelling.png';
import secondaryImage from './futurama_seeing_up.png';
import './styles.css';
// make square compoent remember it was clicked and put "x"
// usestate to help it remember the value, and changes the click
import { useState } from 'react';

// -----------tic tac toe game -----------------

// title for the tic tac toe game
function TicTacTitle() {
  const titleStyle = {
    textAlign: 'center',
    fontSize: '70px',
    fontWeight: 'bold',
  };

  return (
    <div className="news-paper-title">
      <h1 style={titleStyle}> Past-o-rama's Tic Tac Toe</h1>
    </div>
  );
}

export { TicTacTitle };




// tic tac toe page number & footer
function TicTacToeFooter() {

   const footerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  };
  
  return (
    <><div style ={footerStyle}>
      <h3 style={{ textAlign: 'left' }}>
        &copy; 3000 New New York News Paper
      </h3>
      
      <h3 style={{ textAlign: 'right' }}>
          Page 2 of 8
      </h3>
    </div></>
  );
}

export { TicTacToeFooter };  




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

  const[xIsNext, setXIsNext] = useState (true);
  // first move is always x by default, xisnext is a bool



  // tell each square what to display by passing a prop
  // usestate declare squares state variable to store array of 9 squares
  const [squares, setSquares] = useState(Array(9).fill(null));
  // board component pass value prop to each square to render the value
  
  // handleclick function to update squares array when square clicked, updating the board state
  // creates a copy of squares array, updates first element (nextsquare)
  // to 'X', and calls setSquares to update state, re-rending the comp in square/board comp 
  function handleClick(i) {
    // make sure x and o is not over written
    if(squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();
    if(xIsNext) {
      nextSquares[i] = 'X';
    }

    else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext); // if not x then its o
  }
  // not adding the i arguement and not just the hardcoded 0
  


  //show when the winner is made and display it
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } 
  
  else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }




  return (
    <>
      <div className="status">{status}</div>
      
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


// making the winner funciton for tic tac toe
// with the squares array as input, check all winning combinations
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a,b,c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

// -----------futurama newspaper -----------------

// date that is going to be shown on the paper on the top h2
// made a flexbox div to hold both lines of date on both ends
function Date() {
  // making a div to hold the date issue number and another for the full date
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  };

  // first h2 left aligned, second h2 right aligned
  return (
    <><div style ={containerStyle}>
      <h2 style={{ textAlign: 'left' }}>
        Issue 39, News
      </h2>
      
      <h2 style={{ textAlign: 'right' }}>
          Monday, December 1, 3000
      </h2>
    </div></>
  );
}

export { Date };



// title that is going to be shown on the paper on the top h1
// div class for title styling in the center
function Title() {
  const titleStyle = {
    textAlign: 'center',
    fontSize: '90px',
    fontWeight: 'bold',
  };

  return (
    <div className="news-paper-title">
      <h1 style={titleStyle}> New New York News Paper</h1>
      
    </div>
  );
}

export { Title };



// main image that is going to be shown on the paper below the title
console.log(coverImage);
function MainImage() {
  return (
    <img src={coverImage} alt="Futurama News Paper Cover" className="MainImage coverImage"/>
  );
}

export { MainImage };



// main article header under main image

function MainArticleHeader() {
  return (
    <div className="arcle-main-header">
      <br />

      <h2 style= {
        {textAlign: 'center'}
      }>New New York News Paper Launches Today!</h2>

      <br />
    </div>
  );
}

export { MainArticleHeader }; 



// side image for first side article
console.log(sideImage);
function SideImage() {
  return (
   <img src={sideImage} alt="Futurama fry yelling" className= "SideImage sideImage"/>
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
console.log(secondaryImage);
function SecondaryImage() {
  return (
  <img src={secondaryImage} alt="Futurama seeing up" className="SecondaryImage sideImage"/>
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
        "We're seeing more packages than ever before," said Leela, the
        ship's captain. "It's an exciting time for us!" More details on 
        page 6.
      </p>

      <p>Professor Farnsworth was seen saying "wernstrom" when asked about 
         Professor Wernstroms sponssorship with Moms Robotics company for 
         his competing robotic delivery company. More details on page 8.</p>
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
        - Local Handsome Robot Steals Hearts of Many, and Their Wallets
      </p>
    </div>
  );
}

export { OtherStories };



// page numbers and copyright at the bottom of the paper
function Footer() {

   const footerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  };
  
  return (
    <><div style ={footerStyle}>
      <h3 style={{ textAlign: 'left' }}>
        &copy; 3000 New New York News Paper
      </h3>
      
      <h3 style={{ textAlign: 'right' }}>
          Page 1 of 8
      </h3>
    </div></>
  );
}

export { Footer };  



// horizontal line separator
function HorizontalLine() {
  return (
    <hr style={{ border: '1.5px solid black', margin: '20px 0' }} />
  );
}

export { HorizontalLine };



// horizontal line separator for tic tac toe section that is margin down
function HorizontalLineNew() {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <hr style={{ border: '1.5px solid black', margin: '40px 0 20px 0' }} />
    </div>
  );
}

export { HorizontalLineNew };



// Default App: show the cover/main image above the board
export default function App() {
  return (
    <>
      <HorizontalLine />
      <Date />
      <HorizontalLine />

      <Title />
      <HorizontalLine />

      <div className="articles-row">
        <div className="article-main">
          <MainImage />
          <MainArticleHeader />
        </div>
        <div className="article-side">
          <SideImage />
          <SideImageParagraph />
          <SecondaryImage />
          <SecondaryImageParagraph />
        </div>
      </div>

      <OtherStories />
      
      <HorizontalLine />
      <Footer />
      
      <HorizontalLineNew />
      <TicTacTitle />
      <HorizontalLine />
      <Board />
      <HorizontalLine />  
      <TicTacToeFooter />
    </>
  );
}