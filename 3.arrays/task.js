function compareArrays(arr1, arr2) {
  
  return arr1.length !== arr2.length ? false : arr1.every((elem, ind) => elem === arr2[ind]);
}

function advancedFilter(arr) {
 
  return (arr.filter(number => number % 3 ===0 && number > 0)).map(number => number*10);

}
