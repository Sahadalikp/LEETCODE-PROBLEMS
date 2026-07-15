/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
     if (x < 0) {
        return false;
    }
    let og = x ;
    let revers = 0;

    while(x > 0 ){
        let A = x % 10 ;
        revers = revers * 10 + A;
        x =Math.floor (x / 10);
     }
     return og === revers;

};