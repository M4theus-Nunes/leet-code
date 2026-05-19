// https://leetcode.com/problems/two-sum/description/

function twoSum(nums: number[], target: number): number[] {
    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i]
        }
        map.set(nums[i], i);
    }

    return [];
};

console.log(twoSum([2, 7, 11, 15], 9));

export { }