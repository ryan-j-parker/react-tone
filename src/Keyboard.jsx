import React from 'react';
import './Keyboard.css';
import {
  playC4,
  playDb4,
  playD4,
  playEb4,
  playE4,
  playF4,
  playGb4,
  playG4,
  playAb4,
  playA4,
  playBb4,
  playB4,
  playC5,
  playNote,
} from './tone.jsx';

document.addEventListener('keydown', playNote);

function Keyboard() {
  return (
    <div className="keyboard-container">
      <div id="keyboard" className="keyboard">
        <div className="white-key" onClick={playC4}>
          C
        </div>
        <div className="black-key" onClick={playDb4}>
          Db
        </div>

        <div className="white-key" onClick={playD4}>
          D
        </div>
        <div className="black-key" onClick={playEb4}>
          Eb
        </div>

        <div className="white-key" onClick={playE4}>
          E
        </div>
        <div className="white-key" onClick={playF4}>
          F
        </div>
        <div className="black-key" onClick={playGb4}>
          Gb
        </div>

        <div className="white-key" onClick={playG4}>
          G
        </div>
        <div className="black-key" onClick={playAb4}>
          Ab
        </div>

        <div className="white-key" onClick={playA4}>
          A
        </div>
        <div className="black-key" onClick={playBb4}>
          Bb
        </div>

        <div className="white-key" onClick={playB4}>
          B
        </div>

        <div className="white-key" onClick={playC5}>
          C
        </div>
      </div>
    </div>
  );
}

export default Keyboard;
