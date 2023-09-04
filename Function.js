const originalArray = [1, 2, 3, 4, 5];

function reverseArrayFunction(array2) {
    if (array2.length === 0) {
        return [];
    } else {
        const [first, ...rest] = array2;
        return [...reverseArrayFunction(rest), first];
    }
}

const reverseFunction = reverseArrayFunction(originalArray);

console.log(reverseFunction);