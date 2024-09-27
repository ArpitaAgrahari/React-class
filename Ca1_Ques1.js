
function duplicatedArray(arr) {
    return [...arr, ...arr];
}

const originalArray = [1, 2, 3, 4];
const duplicateArray = duplicatedArray(originalArray);

console.log(duplicateArray); 
