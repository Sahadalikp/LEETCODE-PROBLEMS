/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
        s = s.toLowerCase();

    s = s.replace(/[^a-z0-9]/g, "");

    let reverse = s.split("").reverse().join("");

    return s === reverse;
};