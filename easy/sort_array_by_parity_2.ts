const nums = [2, 3];

function sortArrayByParityII(nums: number[]): number[] {
    let par = 0;
    let impar = 1;
    let arr: number[] = [];

    for (const value of nums) {
        if (value % 2 === 0) {
            arr[par] = value
            par += 2
        } else {
            arr[impar] = value
            impar += 2
        }
    }
    return arr;
};

console.log(sortArrayByParityII(nums))

export { };