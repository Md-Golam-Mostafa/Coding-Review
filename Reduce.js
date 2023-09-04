const originalArray = [1, 2, 3, 4, 5];

const reverseArrayReduce = originalArray.reduce((prev, current) => {
    prev.unshift(current);
    return prev;
}, []);

console.log(reverseArrayReduce);
//[5, 4, 3, 2, 1] ===>> The output is after using reduce function
