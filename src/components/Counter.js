import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ScoreboardContext from './Context';

const Counter = ({id, score}) => {
    let context = useContext(ScoreboardContext); // consume the context value Provider gives
    let { actions } = context;

    return (
        <div className="counter player-item">
          <button className="counter-action decrement" onClick={ () => actions.scoreChange( id, -1 )}> - </button>
          <span className="counter-score">{ score }</span>
          <button className="counter-action increment" onClick={ () => actions.scoreChange( id, 1 )}> + </button>
        </div> 
    );
}

Counter.propTypes = {
  id: PropTypes.number,
  score: PropTypes.number
};

export default Counter;
  