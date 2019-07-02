import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Button from '../button/button';
import Icon from '../icon/icon';
import Select from '../select/select';
import DarkThemeContext from '../../contexts/darkTheme';
import GameStateContext, {
  GAME_DIFFICULTIES,
  GAME_STATE_ACTION_TYPE,
} from '../../contexts/gameState';
import './menu.css';

function Menu({
  onClose,
}) {
  const [darkTheme, setDarkTheme] = useContext(DarkThemeContext);
  const [gameState, dispatchGameState] = useContext(GameStateContext);

  function animateToClose() {
    const container = document.querySelector('.menu__container');
    container.classList.remove('slideInLeft');
    container.classList.add('slideOutLeft');
    container.addEventListener('animationend', onClose, { once: true });
  }

  function onClickOnBackground(evt) {
    const { target } = evt;
    if (target.classList.contains('menu') === false) return;
    animateToClose();
  }

  function onEscPressed(evt) {
    if (evt.key !== 'Escape') return;
    animateToClose();
  }

  function focusOnContainer() {
    document.querySelector('.menu__container').focus();
  }

  function handleFormSubmition(evt) {
    evt.preventDefault();
  }

  function onDifficultyChange(evt) {
    const { value } = evt.target;
    dispatchGameState({
      type: GAME_STATE_ACTION_TYPE.CHANGE_DIFFICULTY,
      payload: value,
    });
  }

  function reset() {
    const msg = 'Are you sure you want to reset the score?';
    if (window.confirm(msg))
      window.location.reload();
  }

  useEffect(() => {
    window.addEventListener('keydown', onEscPressed);
    return () => window.removeEventListener('keydown', onEscPressed);
  });

  useEffect(() => {
    const container = document.querySelector('.menu__container');
    container.addEventListener('animationend', () => {
      container.focus();
    }, { once: true });
  });

  return (
    <div
      className="menu"
      onClick={onClickOnBackground}
    >
      <div
        tabIndex="0"
        onFocus={focusOnContainer}
      />
      <div
        className="menu__container animated slideInLeft faster"
        tabIndex="0"
      >
        <div className="menu__close-button">
          <Button
            onClick={animateToClose}
            aria-label="Close menu"
          >
            <Icon
              type="x"
              aria-hidden
              size={20}
            />
          </Button>
        </div>
        <div className="menu__content">
          <form
            onSubmit={handleFormSubmition}
          >
            <div className="menu__form-group">
              <label htmlFor="darkmode">
                Dark Mode
              </label>
              <div>
                <input
                  id="darkmode"
                  name="darkmode"
                  type="checkbox"
                  defaultChecked={darkTheme}
                  onClick={() => setDarkTheme(!darkTheme)}
                />
              </div>
            </div>
            <div className="menu__form-group">
              <label htmlFor="difficulty">
                Difficulty
              </label>
              <Select
                id="difficulty"
                name="difficulty"
                value={gameState.difficulty}
                options={[
                  { label: 'Easy', value: GAME_DIFFICULTIES.EASY },
                  { label: 'Medium', value: GAME_DIFFICULTIES.MEDIUM },
                  { label: 'Hard', value: GAME_DIFFICULTIES.HARD },
                ]}
                onChange={onDifficultyChange}
              />
            </div>
            <div className="menu__form-group">
              <label htmlFor="reset-score">
                Reset Score
              </label>
              <Button
                id="reset-score"
                onClick={reset}
                primary
              >
                Reset
              </Button>
            </div>
          </form>
          <footer className="menu__footer">
            <div>
              Created by
              {' '}
              <a
                href="https://thallesmaia.com/about-me"
                target="_blank"
                rel="noopener noreferrer"
              >
                Thalles Maia
              </a>
            </div>
            <div>
              This project is
              {' '}
              <a
                href="https://github.com/tmaiadev/tictactoe"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Source
              </a>
            </div>
          </footer>
        </div>
        <div
          tabIndex="0"
          onFocus={focusOnContainer}
        />
      </div>
    </div>
  )
}

Menu.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Menu;