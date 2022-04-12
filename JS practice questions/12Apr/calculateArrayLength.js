//To calculate length of an array
const arrayLength = arr => {
  let length = 0;
  arr.forEach(el=>length++)
  return(length);
}

console.log(arrayLength([1,2,3,4,5]))