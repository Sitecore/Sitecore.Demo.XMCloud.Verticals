import { useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ClickOutside = (references: any[], handler: () => void): void => {
  useEffect(() => {
    const listener = (event: Event) => {
      let clickWasOnAReference = false;

      // Do nothing if clicking any of the reference element or descendent elements
      references.forEach((reference) => {
        if (!reference.current || reference.current.contains(event.target)) {
          clickWasOnAReference = true;
        }
      });

      if (!clickWasOnAReference) {
        handler();
      }
    };

    if (window.PointerEvent) {
      document.addEventListener('pointerdown', listener);
    } else {
      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);
    }

    return () => {
      if (window.PointerEvent) {
        document.removeEventListener('pointerdown', listener);
      } else {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      }
    };
  }, [references, handler]);
};

export default ClickOutside;
