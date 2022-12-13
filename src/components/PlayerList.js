import React, { useContext }from 'react';
import Player from './Player';
import ScoreboardContext from './Context';

const PlayerList = () => {
    let context = useContext(ScoreboardContext); // consume the context value Provider gives
    let { players, highestScore } = context; 

    let playerList = players.map( p => 
        <Player 
            { ...p }
            key={ p.id.toString() }
            isHighestScore={ p.score === highestScore && highestScore !== 0 }                    
        />
    )

    return (
        <ul style={{margin:0, padding:0}}> 
            { playerList }
        </ul>
    );
}

export default PlayerList;