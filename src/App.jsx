import React, { useState } from 'react';

const App = () => {
  const [headsText, setHeadsText] = useState('Heads');
  const [tailsText, setTailsText] = useState('Tails');
  const [resultText, setResultText] = useState('');
  const [isHeads, setIsHeads] = useState(true);

  const flipCoin = () => {
    const randomBoolean = Math.random() < 0.5;
    setIsHeads(randomBoolean);

    setResultText(randomBoolean ? headsText : tailsText);
  };

  return (
    <div className="coin-flipper">
      <h1>Simple Coin Flipper</h1>
      <div className={`coin ${isHeads ? 'heads' : 'tails'}`} onClick={flipCoin}>
        {isHeads ? headsText[0] : tailsText[0]}
      </div>
      <p>{resultText}</p>
      <label>
        Heads:
        <input type="text" value={headsText} onChange={(e) => setHeadsText(e.target.value)} />
      </label>
      <label>
        Tails:
        <input type="text" value={tailsText} onChange={(e) => setTailsText(e.target.value)} />
      </label>
      <button onClick={flipCoin}>Flip it!</button>
    </div>
  );
};

export default App;
