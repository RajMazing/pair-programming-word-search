




const wordSearch = (letters, word) => { 
  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = matrixTranspose(letters).map(ls => ls.join(''));

  for (l of horizontalJoin) {
      if (l.includes(word)) return true
  }
  for (l of verticalJoin) {
      if (l.includes(word)) return true
  }
  return false
}

const matrixTranspose = (array) => {
  let verticalArr = [];
  const iLength = array.length;
  const jLength = array[0].length;

  for (let i = 0; i < jLength; i++) {
      const nestArr = [];
      for (let j = 0; j < iLength; j++) {
          nestArr.push(0);
      }
      verticalArr.push(nestArr);
  }
  for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
          verticalArr[j][i] = array[i][j];
      }
  }
  return verticalArr;
}

module.exports = wordSearch