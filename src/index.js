module.exports = function check(str, bracketsConfig) {
  // your solution
    var myArray = str.split('');
    var k, j;
    console.log(myArray);
    console.log(bracketsConfig);
    var openEl, closeEl;
    for (var i = 0; i < myArray.length; i++) {
        closeEl = myArray[i];
        openEl = myArray[i - 1];
        for (k = 0; k < bracketsConfig.length; k++) {
            var openBracket = bracketsConfig[k][0];
            var closeBracket = bracketsConfig[k][1];
            if (closeEl !== closeBracket) {
                continue;
            } else if (closeEl === closeBracket && openEl === openBracket) {
                myArray.splice(i - 1, 2);
                i = -1;
                break;
            }
        }
    }
    
    return (myArray.length < 1);
};

