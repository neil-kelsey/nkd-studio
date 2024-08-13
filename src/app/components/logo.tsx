'use client';

import { useState, useRef } from 'react';
import styles from './logo.module.css';

// Define an interface for the props
interface AnimationParams {
  setVisible: React.Dispatch<React.SetStateAction<boolean[]>>;
  setHoverInProgress: React.Dispatch<React.SetStateAction<boolean>>;
  timeouts: number[];
}

const clearTimeouts = (timeoutsRef: React.MutableRefObject<NodeJS.Timeout[]>) => {
  timeoutsRef.current.forEach(timeoutId => clearTimeout(timeoutId));
  timeoutsRef.current = [];
};

const mouseInAnimation = (
  { setVisible, setHoverInProgress, timeouts }: AnimationParams,
  cursorOverRef: React.MutableRefObject<boolean>,
  timeoutsRef: React.MutableRefObject<NodeJS.Timeout[]>
) => {
  clearTimeouts(timeoutsRef);
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
          mouseOutAnimation({ setVisible, timeouts }, timeoutsRef);
        }
        console.log('NeilTest - Finished!');
      }
    }, delay);
    timeoutsRef.current.push(timeoutId);
  });
};

const mouseOutAnimation = (
  { setVisible, timeouts }: Pick<AnimationParams, 'setVisible' | 'timeouts'>,
  timeoutsRef: React.MutableRefObject<NodeJS.Timeout[]>
) => {
  console.log('NeilTest - timeouts', timeouts);
  clearTimeouts(timeoutsRef);
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

export default function Logo() {
  const [visible, setVisible] = useState<boolean[]>([false, false, false, false, false]);
  const [hoverInProgress, setHoverInProgress] = useState<boolean>(false);
  const [cursorOver, setCursorOver] = useState<boolean>(false);
  const cursorOverRef = useRef(cursorOver);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  const timeouts = [0, 100, 200, 300, 400];

  const hoverHandler = () => {
    setCursorOver(true);
    cursorOverRef.current = true;
    setHoverInProgress(true);
    mouseInAnimation({ setVisible, setHoverInProgress, timeouts }, cursorOverRef, timeoutsRef);
  };

  const mouseOutHandler = () => {
    setCursorOver(false);
    cursorOverRef.current = false;
    if (hoverInProgress) {
      timeoutsRef.current.push(setTimeout(mouseOutHandler, timeouts[timeouts.length - 1]));
      return;
    }
    clearTimeouts(timeoutsRef);
    mouseOutAnimation({ setVisible, timeouts }, timeoutsRef);
  };

  return (
    <div id="logo">
      <a href="#home" className={styles.logoButton} onMouseOver={hoverHandler} onMouseOut={mouseOutHandler}></a>
      <span className={styles.nkd}>
        N<span className={visible[0] ? "visible" : "invisible"}>e</span><span className={visible[1] ? "visible" : "invisible"}>i</span><span className={visible[2] ? "visible" : "invisible"}>l&nbsp;</span>
        K<span className={visible[3] ? "visible" : "invisible"}>elsey&nbsp;</span>
        D<span className={visible[4] ? "visible" : "invisible"}>evelopment&nbsp;</span>
      </span>
      <span className={styles.studio}>Studio</span>
    </div>
  );
}
