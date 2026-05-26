// https://leetcode.com/problems/minimum-index-sum-of-two-lists/

const list1: string[] = ["Shogun", "Tapioca Express", "Burger King", "KFC"]
const list2: string[] = ["KFC", "Shogun", "Burger King"]

// function findRestaurant(list1: string[], list2: string[]): string[] {
//     let result: string[] = [];
//     let indexSum = Infinity;

//     for (let i = 0; i < list1.length; i++) {

//         let index = list2.indexOf(list1[i])

//         if (index > -1 && index + i < indexSum) {
//             result[0] = list1[i]
//             indexSum = index + i

//         } else if (index > -1 && index + i === indexSum) {
//             result.push(list1[i])
//             indexSum = index + i
//         }
//     }

//     return result;

// Esse era O(n * m)

// };

function findRestaurant(list1: string[], list2: string[]): string[] {
    const list2Map = new Map();

    for (let i = 0; i < list2.length; i++) {
        list2Map.set(list2[i], i);
    }

    let indexSum = Infinity
    let result: string[] = []

    for (let j = 0; j < list1.length; j++) {

        const indexInList2 = list2Map.get(list1[j])

        if (indexInList2 === undefined) continue

        if (indexInList2 + j < indexSum) {
            result = [list1[j]]
            indexSum = indexInList2 + j

        } else if (indexInList2 + j === indexSum) {
            result.push(list1[j])
        }
    }

    return result
};

console.log(findRestaurant(list1, list2))

// Esse é O(n + m)

export { };

