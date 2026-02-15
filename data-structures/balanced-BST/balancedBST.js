class Node {
  left = null;
  right = null;
  data = null;
}

export default class BalancedBST {
  root = null;

  constructor(arr) {
    this.root = this.buildTree(arr);
  }

  buildTree(arr) {
    // returns root of the BST
  }

  includes(value) {
    // returns boolean
  }

  insert(value) {
    // does nothing if value already exists
  }

  deleteItem(value) {
    // does nothing if value doesn't exist
  }

  levelOrderForEach(callback) {
    // traverse tree in BFO and call the callback for each value
    // throw error if missing a callback
  }

  inOrderForEach(callback) {
    // traverse tree in DFO and call the callback for each value
    // throw error if missing a callback
  }

  preOrderForEach(callback) {
    // traverse tree in DFO and call the callback for each value
    // throw error if missing a callback
  }

  postOrderForEach(callback) {
    // traverse tree in DFO and call the callback for each value
    // throw error if missing a callback
  }

  height(value) {
    // returns the height of the node for the given value
    // Height is defined as the number of edges in the longest path from that
    // node to a leaf node.
    // if not found then return undefined
  }

  depth(value) {
    // returns the depth of the node for the given value
    // Depth is defined as the number of edges in the path from that node to
    // the root node.
    // if not found then return undefined
  }

  isBalanced() {
    // checks if the tree is balanced
    // a tree is considered balanced if the height between its left and right subtrees is no more than 1
  }

  rebalance() {
    // rebalances an unbalanced tree
  }
}
