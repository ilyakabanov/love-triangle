/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {

  var count = 0;

  for (let i = 0; i < preferences.length; i++) {

    var firsh = preferences[i];
    var second = preferences[firsh - 1];
    var last = preferences[second - 1];

    if ( firsh !== last && last == i + 1 ) {
      count++;
    }
  }

  return count / 3 ;
};