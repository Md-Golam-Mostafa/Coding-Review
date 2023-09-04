const originalArray = [1, 2, 3, 4, 5];
const reverseArray = originalArray.reverse();
let index = originalArray.length - 1;
while (index >= 0) {
    reverseArray.push(originalArray[index]);
    index--;
    return console.log(reverseArray);
}

//[ 5, 4, 3, 2, 1, 1 ] ===>> The output is after using while loop
