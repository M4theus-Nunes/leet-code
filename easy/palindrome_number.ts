// https://leetcode.com/problems/palindrome-number/description/

function isPalindrome(x: number): boolean {
    const string = String(x);

    if (string === string.split("").reverse().join("")) {
        return true;
    }

    return false;
};

console.log(isPalindrome(121));

export { };