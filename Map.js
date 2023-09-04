const originalArray = [1, 2, 3, 4, 5];

const reverseArrayMap = originalArray.map((_, index, array) => array[array.length - 1 - index]);

console.log(reverseArrayMap);
// [ 1, 2, 3, 4, 5 ] ===>> The output is after using map()
