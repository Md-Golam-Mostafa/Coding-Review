const originalArray = [1, 2, 3, 4, 5];

const reverseArrayEmpty = [];
// for (const iterator of object) {
// }
for (const item of originalArray) {
    reverseArrayEmpty.unshift(item);
}
console.log(reverseArrayEmpty);
//[ 1, 2, 3, 4, 5 ] ===>> The output is after using map()
