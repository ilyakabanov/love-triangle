/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {

  let countArr = [];

  for (let i = 0; i < preferences.length; i+=3) {

    if ( preferences[i] - preferences[i+1] == -1 && preferences[i+1] - preferences[i+2] == 2 ) {

      let sum = preferences[i] + preferences[i+1] + preferences[i+2];

      if ( !inArray(countArr, sum)) {
        countArr.push(sum);
      }
    }
  }
  return countArr.length;
};

function inArray(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == item) return true;
  }
  return false;
}
