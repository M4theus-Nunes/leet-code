// https://leetcode.com/problems/merge-two-sorted-lists/description/


//  Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

let a3 = new ListNode(4, null)
let a2 = new ListNode(2, a3)
let a1 = new ListNode(1, a2)

let b3 = new ListNode(4, null)
let b2 = new ListNode(3, b3)
let b1 = new ListNode(1, b2)

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const dummy = new ListNode(0)
    let current = dummy
    let currentList1 = list1
    let currentList2 = list2

    while (currentList1 !== null && currentList2 !== null) {
        if (currentList1.val <= currentList2.val) {
            current.next = currentList1
            currentList1 = currentList1.next
        } else {
            current.next = currentList2
            currentList2 = currentList2.next
        }
        current = current.next
    }

    if (currentList1) {
        current.next = currentList1
    }

    if (currentList2) {
        current.next = currentList2
    }

    return dummy.next;
};

console.log(mergeTwoLists(a1, b1))

export { };