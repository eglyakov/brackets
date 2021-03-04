module.exports = function check(str, bracketsConfig) {
  let arr = str.split('');

  if (arr.length % 2 != 0) return false;

  for (let i = 0; i < bracketsConfig.length; i++) {      
      for (let j = 0; j < arr.length; j++) {

          if (arr[j] == bracketsConfig[i][0] && arr[j + 1] == bracketsConfig[i][1]) {
              arr.splice(j, 2);
              i = 0;
              j = -1;
          }
      }
  }

  return (arr.length == 0) ? true : false;
}
