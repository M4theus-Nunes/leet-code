function twoSum(nums: number[], target: number): number[] {
    const mapa = new Map()

    for (let i = 0; i < nums.length; i++) {
        if (mapa.has(target - nums[i])) {
            return [mapa.get(target - nums[i]), i]
        }
        mapa.set(nums[i], i);
    }

    return [];
};

console.log(twoSum([2, 7, 11, 15], 9));

export { }