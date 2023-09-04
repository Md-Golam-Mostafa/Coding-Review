const originalArray = [1, 2, 3, 4, 5];

const reversedArrayForEmpty = [];
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }
for (let index = originalArray.length - 1; index >= 0; index--) {
    reversedArrayForEmpty.push(originalArray[index]);
}
console.log(reversedArrayForEmpty);
//[5, 4, 3, 2, 1] ===>> The output is after using for loop
