'use client';

import { useState, useRef } from 'react';
import styles from './logo.module.css';

export default function Logo() {
  const [visible, setVisible] = useState([false, false, false]);
  const [hoverInProgress, setHoverInProgress] = useState(false);
  const [cursorOver, setCursorOver] = useState(false);
  const cursorOverRef = useRef(cursorOver);
  const timeoutsRef = useRef([]);
  const timeouts = [0, 100, 200, 300, 400];

  const clearTimeouts = () => {
    timeoutsRef.current.forEach(timeoutId => clearTimeout(timeoutId));
    timeoutsRef.current = [];
  };

  const mouseInAnimation = (setVisible, setHoverInProgress, timeouts) => {
    clearTimeouts();
    timeouts.forEach((delay, index) => {
      const timeoutId = setTimeout(() => {
        setVisible(prevState => {
          const newState = [...prevState];
          newState[index] = true;
          return newState;
        });
        if (index === timeouts.length - 1) {
          setHoverInProgress(false);
          // if the user has already moved their mouse off the logo then play the mouseOutAnimation
          if (!cursorOverRef.current) {
            mouseOutAnimation(setVisible, timeouts);
          }
          console.log('NeilTest - Finished!');
        }
      }, delay);
      timeoutsRef.current.push(timeoutId);
    });
  };

  const mouseOutAnimation = (setVisible, timeouts) => {
    console.log('NeilTest - timeouts', timeouts);
    clearTimeouts();
    timeouts.forEach((delay, index) => {
      const timeoutId = setTimeout(() => {
        setVisible(prevState => {
          const newState = [...prevState];
          newState[timeouts.length - 1 - index] = false;
          return newState;
        });
      }, delay);
      timeoutsRef.current.push(timeoutId);
    });
  };

  const hoverHandler = () => {
    setCursorOver(true);
    cursorOverRef.current = true;
    setHoverInProgress(true);
    mouseInAnimation(setVisible, setHoverInProgress, timeouts);
  };

  const mouseOutHandler = () => {
    setCursorOver(false);
    cursorOverRef.current = false;
    if (hoverInProgress) {
      // Check again after the last hover timeout
      timeoutsRef.current.push(setTimeout(mouseOutHandler, timeouts[timeouts.length - 1]));
      return;
    }
    clearTimeouts();
    mouseOutAnimation(setVisible, timeouts);
  };

  return (
    <div id="logo">
      <div 
        className={styles.logoButton}
        onMouseOver={hoverHandler} 
        onMouseOut={mouseOutHandler}
      ></div>
      <span className={styles.nkd}>
        N<span className={visible[0] ? "visible" : "invisible"}>e</span><span className={visible[1] ? "visible" : "invisible"}>i</span><span className={visible[2] ? "visible" : "invisible"}>l&nbsp;</span>
        K<span className={visible[3] ? "visible" : "invisible"}>elsey&nbsp;</span>
        D<span className={visible[4] ? "visible" : "invisible"}>evelopment&nbsp;</span>
      </span>
      <span className={styles.studio}>Studio</span>
    </div>
  );
}
