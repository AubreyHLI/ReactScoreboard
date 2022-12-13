import React, { useContext } from 'react';
import ScoreboardContext from './Context';

const Statis = () => {
    let context = useContext(ScoreboardContext); 
    let { players } = context;
     
    const totalPlayers = players.length;
    const totalPoints = players.reduce((accumulation, p) => {
        return accumulation + p.score;
    }, 0); // 0 is the initial value of the parameter 'accumulation'

    return (
    <div className="stats">
        <table>
            <tbody>
                <tr>
                    <td>Players:</td>
                    <td>{ totalPlayers }</td>
                </tr>
                <tr>
                    <td>Total Points:</td>
                    <td>{ totalPoints }</td>
                </tr>
            </tbody>
        </table>
    </div>
    );

    
}

export default Statis;