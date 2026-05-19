// https://leetcode.com/problems/valid-parentheses/description/

function isValid(s: string): boolean {
    const stack: string[] = [];

    for (let char of s) {
        if (char === '(' ||
            char === '[' ||
            char === '{') {
                stack.push(char);
        } else {
            let lastChar = stack.pop();
            if (char === ')' && lastChar !== '(' ||
                char === ']' && lastChar !== '[' ||
                char === '}' && lastChar !== '{') {
                return false
            }
        }
    }
    return stack.length === 0;
};

console.log(isValid('[({})]'))

export { }; 