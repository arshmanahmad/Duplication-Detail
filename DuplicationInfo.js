const arr = ["arshman", "arshman", 1, 1, 2, 3, 4, 4, 5, "Shuja", "Shuja", "Shuja"]


const RedundancyInfo = (array) => {
    const newObj = {};
    array.forEach(element => {
        newObj[element] = (newObj[element] || 0) + 1;
    });
    return newObj
}
console.log(RedundancyInfo(arr))