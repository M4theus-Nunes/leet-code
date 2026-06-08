// https://leetcode.com/problems/duplicate-zeros/

/**
 Do not return anything, modify arr in-place instead.
 */

let arr = [0,4,1,0,0,8,0,0,3]
// let arr = [1, 0, 2, 3, 0, 4, 5, 0]

function duplicateZeros(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i + 1, 0, 0);
            arr.pop();
            i++;
        }
    }
}

duplicateZeros(arr)
console.log(arr)

export { }