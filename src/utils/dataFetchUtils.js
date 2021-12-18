/**
 * Emulate async data fetching
 * @param {any[]} data
 * @param {number} delay
 * @returns
 */
export const emulateAsyncFetch = (data, delay) =>
  new Promise((resolve) => {
    setInterval(() => resolve(data), delay);
  });
