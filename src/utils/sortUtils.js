/**
 * Compare items for ascending sort
 * @param a - first item to compare
 * @param b - second item to compare
 */
export const sortAsc = (a, b) => (a > b ? 1 : a < b ? -1 : 0);

/**
 * Compare items for descending sort
 * @param a - first item to compare
 * @param b - second item to compare
 */
export const sortDesc = (a, b) => (a > b ? -1 : a < b ? 1 : 0);

export const SortDirection = {
  Ascending: 'Ascending',
  Descending: 'Descending',
};
