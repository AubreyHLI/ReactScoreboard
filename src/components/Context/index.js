import React, { useState, useRef, useEffect } from 'react';

const data = [
  {
    name: "Aubrey",
    score: 0,
    id: 1
  },
  {
    name: "Lawana",
    score: 0,
    id: 2
  },
  {
    name: "Shayne",
    score: 0,
    id: 3
  },
  {
    name: "Gerard",
    score: 0,
    id: 4
  }
];

// initial a context object
const ScoreboardContext = React.createContext({}); //React.createContext() sets up a context and returns an object with Provider and Consumer properties, which are also objects 

// assign the Provider to a component
export function ScoreboardContextProvider(props) {
    const [players, setPlayers] = useState(data);
    const [highestScore, setHighestScore] = useState(0);

    const nextPlayerId = useRef(5);
    
    useEffect(() => {
        const scores = players.map( p => p.score );
        setHighestScore( Math.max(...scores) );
    }, [ players ]);

    const handleRemovePlayer = (id) => {
        setPlayers( prevPlayers => prevPlayers.filter( p => p.id !== id));
    }

    const handleScoreChange = (id, change) => {
        setPlayers( prevPlayers => prevPlayers.map( p => {
          if (p.id === id) { 
            return {
              name: p.name,
              score: p.score + change,
              id: p.id
            }
          } else { return p }
        }));
    }
    
    const handleAddPlayer = (inputValue) => {
        setPlayers( prevPlayers => 
          [ ...prevPlayers,
            {
              name: inputValue,
              score: 0,
              id: nextPlayerId.current++
            }
          ]);
      }

    return (
    <ScoreboardContext.Provider value={{ 
          players: players,
          highestScore: highestScore,
          actions: {
                      scoreChange: handleScoreChange,
                      removePlayer: handleRemovePlayer,
                      addPlayer: handleAddPlayer
                    }
        }}>
        { props.children } {/* render all elements that are child componets of the <ScoreboardContextProvider></ScoreboardContextProvider> */}
    </ScoreboardContext.Provider>
    );
}

export default ScoreboardContext;

