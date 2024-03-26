import { useEffect, useState } from 'react';

const useHandheldDetector = (): boolean => {
  const [isHandheld, setIsHandheld] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 990px)');
    const handleMatch = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsHandheld(e.matches);
    };

    handleMatch(mediaQuery);

    const mediaQueryListener = (e: MediaQueryListEvent | MediaQueryList) => {
      handleMatch(e);
    };

    mediaQuery.addEventListener('change', mediaQueryListener);

    return () => {
      mediaQuery.removeEventListener('change', mediaQueryListener);
    };
  }, []);

  return isHandheld;
};

export default useHandheldDetector;
