import { useEffect, useState } from 'react';

export const useUrlParams = (key: string, defaultValue: string) => {
  const getParamValue = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(key) || defaultValue;
  };

  const [param, setParam] = useState<string>(getParamValue());

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set(key, param);
    window.history.replaceState(null, '', `?${urlParams.toString()}`);
  }, [param, key]);

  return [param, setParam] as const;
};
