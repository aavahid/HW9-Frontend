/*
H. Write a method that clears the array from all unnecessary elements, like false, undefined, empty strings, zero, null.  (must use filter() function)
console.log(clear([0, 1, false, 2, undefined, '', 3, null]); -> [1, 2, 3]
*/

function clear(array) {
  return array.filter(
    (arr) =>
      arr !== false &&
      arr !== true &&
      arr !== undefined &&
      arr !== "" &&
      arr !== 0 &&
      arr !== null
  );
}

console.log(clear(["0", 0, 1, false, 2, undefined, true, "", 3, null]));
