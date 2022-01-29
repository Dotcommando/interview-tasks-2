# Search for identical elements in arrays

Write the body of the function `intersectAll` that searches for the same elements in arrays of integers. Each array can contain identical digits.

Output format is array of unique integers.

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
      
    }
    
    console.log(' ');
    console.log(intersectAll(predefinedArrays));
