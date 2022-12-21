import React, { useEffect, useRef } from 'react';

interface Props {
  keyValue: [string, string];
  triggerEvent: () => void;
}

const useMultipleKeyDown = ({ keyValue, triggerEvent }: Props) => {
  const keyDownRef = useRef<{ [key: string]: boolean }>({});
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyup);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyup);
    };
  }, []);

  const handleKeyDown = (event: KeyboardEvent) => {
    keyDownRef.current[event.key] = true;
    if (keyDownRef.current[keyValue[0]] && event.key === keyValue[1])
      triggerEvent();
  };

  const handleKeyup = (event: KeyboardEvent) => {
    delete keyDownRef.current[event.key];
  };
};

export default useMultipleKeyDown;
