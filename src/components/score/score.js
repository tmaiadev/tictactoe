import React, {
  useState,
  useEffect,
  useContext
} from 'react';
import Icon from '../icon/icon';
import GameStateContext from '../../contexts/gameState';
import './score.css';

function Score() {
  const [gameState] = useContext(GameStateContext);
  const [oScore, setOScore] = useState(gameState.score.you);
  const [xScore, setXScore] = useState(gameState.score.opponent);

  useEffect(() => {
    const { you, opponent } = gameState.score;
    if (you === oScore && opponent === xScore) return;

    function transitionEnd($el) {
      return new Promise(resolve => {
        $el.addEventListener('transitionend', resolve, { once: true });
      });
    }

    // Get score number and hide it
    const $n = document.getElementById(`${you !== oScore ? 'o' : 'x'}-score`);
    $n.classList.add('score__number--hide');

    transitionEnd($n)
      .then(() => {
        // After the animation, we set the number
        // to will-update position
        $n.classList.remove('score__number--hide');
        $n.classList.add('score__number--will-update');
        
        // We update the score
        if (oScore !== you) {
          setOScore(you);
        } else {
          setXScore(opponent);
        }

        // Wait for the will-update animation to end
        return transitionEnd($n);
      })
      .then(() => {
        // Number will now be shown
        $n.classList.remove('score__number--will-update');
      });
  }, [gameState, oScore, setOScore, xScore, setXScore]);

  return (
    <div className="score">
      <div />
      <div className="score__cell">
        <div className="score__img">
          <Icon
            type="o"
            color="var(--primary-color)"
            size={40}
          />
        </div>
        <div className="score__number-holder">
          <div className="score__number" id="o-score">
            {oScore}
          </div>
        </div>
      </div>
      <div />
      <div className="score__cell">
        <div className="score__img">
          <Icon
            type="x"
            color="var(--secondary-color)"
            size={40}
          />
        </div>
        <div className="score__number-holder">
          <div className="score__number" id="x-score">
            {xScore}
          </div>
        </div>
      </div>
      <div />
    </div>
  )
}

export default Score;