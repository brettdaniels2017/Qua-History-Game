import { useEffect, useReducer, useState } from 'react';
import { HISTORY, HOW_TO } from './data/historyContent.js';
import { DEBATES, reducer } from './game/engine.js';
import Backdrop from './components/Backdrop.jsx';
import EndingScreen from './components/EndingScreen.jsx';
import GameScreen from './components/GameScreen.jsx';
import GuideModal from './components/GuideModal.jsx';
import InfoScreen from './components/InfoScreen.jsx';
import IntroScreen from './components/IntroScreen.jsx';
import TitleScreen from './components/TitleScreen.jsx';

export default function App() {
  const [screen, setScreen] = useState('title');
  const [returnTo, setReturnTo] = useState('title');
  const [guide, setGuide] = useState(false);
  const [game, dispatch] = useReducer(reducer, null);

  useEffect(() => {
    const debate = game ? DEBATES[game.debateIndex] : null;
    const titles = {
      title: 'The Last Republic',
      context: 'Historical Context · The Last Republic',
      howto: 'How to Play · The Last Republic',
      intro: '50 BCE · The Last Republic',
      game: game?.phase === 'ending'
        ? 'The Verdict · The Last Republic'
        : `${debate?.title || 'The Senate'} · The Last Republic`,
    };
    document.title = titles[screen] || 'The Last Republic';
  }, [screen, game]);

  function start() {
    dispatch({ type: 'RESET' });
    setGuide(false);
    setScreen('intro');
  }

  function openInfo(next) {
    if (screen !== 'context' && screen !== 'howto') setReturnTo(screen);
    setGuide(false);
    setScreen(next);
  }

  function closeInfo() {
    setScreen(returnTo);
  }

  function abandon() {
    dispatch({ type: 'RESET' });
    setGuide(false);
    setScreen('title');
  }

  const inGame = screen === 'game' && game;
  const playing = inGame && game.phase !== 'ending';

  return (
    <div className="app">
      <Backdrop />
      <div className="foreground">
        {screen === 'title' && (
          <TitleScreen
            onStart={start}
            onContext={() => openInfo('context')}
            onHow={() => openInfo('howto')}
          />
        )}
        {screen === 'context' && (
          <InfoScreen
            page={HISTORY}
            onBack={closeInfo}
            onSwitch={() => openInfo('howto')}
            switchLabel="How to Play"
          />
        )}
        {screen === 'howto' && (
          <InfoScreen
            page={HOW_TO}
            onBack={closeInfo}
            onSwitch={() => openInfo('context')}
            switchLabel="Historical Context"
          />
        )}
        {screen === 'intro' && (
          <IntroScreen onBegin={() => setScreen('game')} />
        )}
        {playing && (
          <GameScreen state={game} dispatch={dispatch} onGuide={() => setGuide(true)} />
        )}
        {inGame && game.phase === 'ending' && (
          <EndingScreen
            game={game}
            onAgain={start}
            onContext={() => openInfo('context')}
          />
        )}
      </div>
      <GuideModal
        open={guide}
        onClose={() => setGuide(false)}
        onContext={() => openInfo('context')}
        onHow={() => openInfo('howto')}
        onAbandon={abandon}
      />
    </div>
  );
}
