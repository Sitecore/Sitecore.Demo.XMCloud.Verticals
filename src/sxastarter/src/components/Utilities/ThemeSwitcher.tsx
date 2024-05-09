import React, { useCallback, useEffect, useState } from 'react';

export const Default = (): JSX.Element => {
  const [isSystemDark, setIsSystemDark] = useState(false);

  const toggleDarkMode = (condition: boolean) => {
    document.body.classList.toggle('dark', condition);
  };

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');

    if (mq.matches) {
      setIsSystemDark(true);
    }
    toggleDarkMode(mq.matches);

    mq.addEventListener('change', (evt) => {
      setIsSystemDark(evt.matches);
      toggleDarkMode(evt.matches);
    });
  }, []);

  const handleThemeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    toggleDarkMode(e.target.checked);
  }, []);

  return (
    <label className="theme-switcher">
      <input type="checkbox" defaultChecked={isSystemDark} onChange={handleThemeChange} />
      <span className="theme-switcher-slider"></span>
    </label>
  );
};
