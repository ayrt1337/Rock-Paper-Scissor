import { createGlobalStyle } from 'styled-components';
import './App.css';
import Panel from './components/panel';
import { Choice } from './components/choice';
import RulesButton from './components/rules-button';
import Overlay from './components/rules-panel';
import { useState } from 'react';

function App() {
  const [showRules, setShowRules] = useState(false)
  const [showChoice, setShowChoice] = useState(false)
  const [choice, setChoice] = useState(null)
  const [showHousePick, setShowHousePick] = useState(false)
  const [houseChoice, setHouseChoice] = useState(null)
  const [score, setScore] = useState(0)
  const [screen, setScreen, getScreen] = useState(null)
  const [showScreen, setShowScreen] = useState(false)

  return (
    <>
      <GlobalStyle />

      <Overlay 
        setShowRules={setShowRules} 
        showRules={showRules}
      />

      <Panel 
        score={score}
        setScore={setScore}
      />

      <Choice
        choice={choice}
        setChoice={setChoice}
        setShowChoice={setShowChoice} 
        showChoice={showChoice}
        showHousePick={showHousePick}
        setShowHousePick={setShowHousePick}
        houseChoice={houseChoice}
        setHouseChoice={setHouseChoice}
        screen={screen}
        setScreen={setScreen}
        getScreen={getScreen}
        showScreen={showScreen}
        setShowScreen={setShowScreen}
        score={score}
        setScore={setScore}
      />

      <RulesButton setShowRules={setShowRules}/>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
  }
`

export default App;
