function findLongestWordLength(str) {
    str = str.split(' ');
    let max = '';
    for (const each of str) {
      if (each.length > max.length) {
        max = each
      }
    }
    return max.length;
  }
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));