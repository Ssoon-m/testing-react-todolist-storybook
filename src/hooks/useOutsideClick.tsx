import React, { useEffect } from 'react';

interface Props {
  triggerEvent: () => void;
}

const useOutsideClick = ({ triggerEvent }: Props) => {
  useEffect(() => {
    window.addEventListener('click', () => triggerEvent());
    return () => {
      window.removeEventListener('click', () => triggerEvent());
    };
  }, []);
};

export default useOutsideClick;
