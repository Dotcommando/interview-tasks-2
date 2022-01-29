/**
 * Write the body of the function `intersectAll` that makes search for the
 * same elements in arrays of integers. Each array can contain identical digits.
 * Output format is array of unique integers.
 *
 * @example
 * ```ts
 * intersectAll([1, 2], [1, 2, 2, 7], [2, 5, 1]); // [1, 2]
 * ```
 */

// const predefinedArrays = [
//   [ 1, 2, 3, 4, 5, 6, 7, 8 ],
//   [ 2, 4, 4, 6, 6, 8 ],
//   [ 8, 3, 3, 4, 5, 6, 7, 9, 10 ],
//   [ 1, 1, 2, 4, 5, 5, 6, 8, 9 ],
// ]; // [ 4, 6, 8 ]

const predefinedArrays = [
  [1, 2],
  [1, 2, 2, 7],
  [2, 5, 1],
]; // [1, 2]

export function intersectAll(arrays: number[][]): number[] {
  let result = Array.from(new Set(arrays[0]).values()); // Array with unique elements from the first array
  const length = arrays.length;

  for (let i = 1; i < length; i++) {
    result = intersect(result, arrays[i]);
  }

  return result;
}

export function intersect(arr1: number[], arr2: number[]): number[] {
  const arr2Set = new Set(arr2);

  return Array.from((new Set(arr1.filter(x => arr2Set.has(x)))).values());
}

console.log(' ');
console.log(intersectAll(predefinedArrays));
