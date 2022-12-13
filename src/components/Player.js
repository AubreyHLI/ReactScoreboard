import React, { memo, useContext }from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Icon from './Icon';
import ScoreboardContext from './Context';

const Player = ({ id, name, score, isHighestScore }) => {
  let context = useContext(ScoreboardContext);
  let { actions } = context;

  return (
    <div className="player"> 
      <span className="player-name player-item">
        <button className="remove-player" onClick={() => actions.removePlayer(id)}>✖</button>
        <Icon isHighestScore={isHighestScore} />
        { name }
      </span>
        
      <Counter
          score={score}
          id={id}
      />
    </div>
  );
}

const playerPropsAreEqual = (prevProps, nextProps) => {
    return prevProps.score === nextProps.score && prevProps.isHighestScore === nextProps.isHighestScore;
} // 因为对于某个 player 的 props 中，只有 score 和 isHighesScore 会变，所以检查二者的前后状态是否一致即可

Player.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    isHighestScore: PropTypes.bool.isRequired
};

export default memo(Player, playerPropsAreEqual);

