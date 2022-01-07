import React from 'react';

const Instructions: React.FC = function(){

    return (
      <div className="instructions-box">
        <h3>Instructions:</h3>
        <ul className="instructions-list">
          <li>You and your opponent are competing in a navy battle.</li>
          <li>Click &quot;Start now&quot; to begin placing your ships.</li>
          <li>Drag and drop your ships into your board.</li>
          <li>The opponent will place their ships at secret locations.</li>
          <li>Click &quot;Start game&quot; to begin the game.</li>
          <li>
            Choose which spot on your opponent&apos;s board to fire on by
            clicking on it.
          </li>
          <li>The first to sink the other player&apos;s whole fleet wins!</li>
        </ul>
      </div>
    );
}

export default Instructions