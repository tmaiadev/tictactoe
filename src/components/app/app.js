import React, { useState } from 'react';
import DarkThemeContext from '../../contexts/darkTheme';
import Button from '../button/button';
import Icon from '../icon/icon';
import './app.css';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <DarkThemeContext.Provider value={[darkTheme, setDarkTheme]}>
      <div className={`app ${darkTheme ? 'app--dark-theme' : ''}`}>
        <div className="app__menu-button">
          <Button
            onClick={() => setMenu(true)}
          >
            <Icon
              type="menu"
              aria-hidden
            />
          </Button>
        </div>
      </div>
    </DarkThemeContext.Provider>
  );
}

export default App;
