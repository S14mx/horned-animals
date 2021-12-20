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
 * Modify given dataset by generating and appending unique ID field to each element
 * @param {any[]} data
 * @returns
 */
export const populateId = (data) => data.map((el, idx) => ({ ...el, id: idx }));

/**
 * Set given data to local storage by a given key
 * @param {string} key
 * @param {any} value
 */
export const setToStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

/**
 * Filter data by given search criteria
 * @param {any[]} data - data to be filtered
 * @param {string} filter - search filter
 * @param {string} fields - fields to be searched
 * @returns elements of the given data that match given search critera
 */
export const filterData = (data, filter, fields) =>
  data.filter((element) => {
    if (!filter) return true;

    return fields.some((field) => {
      const value = String(element[field]).toLocaleLowerCase();
      const filterValue = filter?.toLocaleLowerCase();

      return value.includes(filterValue);
    });
  });
