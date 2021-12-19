/**
 * Emulate async data fetching
 * @param {any[]} data - data to be returned
 * @param {number} delay
 * @returns
 */
export const emulateAsyncFetch = (data, delay) =>
  new Promise((resolve) => {
    setInterval(() => resolve(data), delay);
  });

/**
 * Retrieve data from local storage emulating async behavior
 * @param {string} key
 * @returns
 */
export const getFromStorageAsync = (key) => {
  const data = localStorage.getItem(key);

  return emulateAsyncFetch(JSON.parse(data), 100);
};

/**
 * Set given data to local storage by a given key
 * @param {string} key
 * @param {any} value
 */
export const setToStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
