const { NotImplementedError } = require('../extensions/index.js');
const {json} = require("mocha/lib/reporters");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let head = l;
  let current;
  let previous;

  if (head.value === k) {
    l = head.next;
    head = l;
  }

  current = head;

  while (current?.next) {
      while (current && current.value !== k) {
        previous = current;
        current = current.next;
      }
      previous.next = current?.next || null;
      current = current?.next || null;
    }

  return l;
}

module.exports = {
  removeKFromList
};
