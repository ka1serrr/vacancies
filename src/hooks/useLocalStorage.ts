export const useLocalStorage = () => {
  const setLocalStorage = (key: string, data: unknown) => {
    let stringifiedData;
    if (typeof data !== 'string') {
      stringifiedData = JSON.stringify(data);
      localStorage.setItem(key, stringifiedData);
    } else {
      localStorage.setItem(key, data);
    }
  };
  const getLocalStorage = (key: string) => {
    return localStorage.getItem(key);
  };

  return { setLocalStorage, getLocalStorage };
};
