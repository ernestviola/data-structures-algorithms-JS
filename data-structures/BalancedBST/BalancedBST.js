import Queue from '../Queue/Queue.js';

class Node {
  left = null;
  right = null;
  data = null;
  constructor(data) {
    this.data = data;
  }
}

export default class BalancedBST {
  root = null;

  /**
   *
   * @param {Array} arr Takes a sorted array and returns the root to a BST
   */
  constructor(arr) {
    if (arr.length >= 0) this.root = this.buildTree(arr);
  }

  buildTree(arr) {
    // returns root of the BST
    return this.#recursiveBuildTree(arr);
  }

  includes(value) {
    // returns boolean
    if (!this.root) return false;

    let current = this.root;

    while (current) {
      if (current.data === value) return true;
      else if (current.data > value) {
        // left
        current = current.left;
      } else {
        // right
        current = current.right;
      }
    }

    return false;
  }

  insert(value) {
    // does nothing if value already exists
    // could be an empty tree
    if (!this.root) {
      // insert into root
      const newNode = new Node(value);
      this.root = newNode;
      return;
    }
    let current = this.root;

    while (current) {
      if (current.data === value) return;
      else if (current.data > value) {
        // left
        if (!current.left) {
          const newNode = new Node(value);
          current.left = newNode;
          return;
        } else {
          current = current.left;
        }
      } else {
        // right
        if (!current.right) {
          const newNode = new Node(value);
          current.right = newNode;
          return;
        } else {
          current = current.right;
        }
      }
    }

    return false;
  }

  deleteItem(value) {
    // does nothing if value doesn't exist
    // could make an empty tree
  }

  levelOrderForEach(callback) {
    // traverse tree in BFO and call the callback for each value
    // throw error if missing a callback
    if (!callback) throw Error('Missing callback');

    const q = new Queue();

    q.enqueue(this.root);
    while (!q.isEmpty()) {
      let currNode = q.dequeue;
      if (currNode.left) {
        q.enqueue(currNode.left);
      }
      if (currNode.right) {
        q.enqueue(currNode.right);
      }
      callback(currNode.data);
    }
  }

  inOrderForEach(callback) {
    // traverse tree in DFO and call the callback for each value
    // throw error if missing a callback
    if (!callback) throw Error('Missing callback');
    this.#inOrderForEachHelper(this.root, callback);
  }

  #inOrderForEachHelper(root, callback) {
    if (root === null) return;

    this.#inOrderForEachHelper(root.left, callback);
    callback(root.data);
    this.#inOrderForEachHelper(root.right, callback);
  }

  preOrderForEach(callback) {
    // traverse tree in DFO and call the callback for each value
    // throw error if missing a callback
    if (!callback) throw Error('Missing callback');
    this.#preOrderForEachHelper(this.root, callback);
  }

  #preOrderForEachHelper(root, callback) {
    if (root === null) return;

    callback(root.data);
    this.#inOrderForEachHelper(root.left, callback);
    this.#inOrderForEachHelper(root.right, callback);
  }

  postOrderForEach(callback) {
    // traverse tree in DFO and call the callback for each value
    // throw error if missing a callback
    if (!callback) throw Error('Missing callback');
    this.#postOrderForEachHelper(this.root, helper);
  }

  #postOrderForEachHelper(root, callback) {
    if (root === null) return;

    callback(root.data);
    this.#inOrderForEachHelper(root.left, callback);
    this.#inOrderForEachHelper(root.right, callback);
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
    // stack use preOrder to find the value
    // once we find the value we can begin returning up from the value adding 1 each time
  }

  isBalanced() {
    // checks if the tree is balanced
    // a tree is considered balanced if the height between its left and right subtrees is no more than 1
  }

  rebalance() {
    // rebalances an unbalanced tree
    // get an array in InORDER then pass it to buildTree
    const arr = [];

    this.inOrderForEach((val) => {
      arr.push(val);
    });

    this.root = this.buildTree(arr);
  }

  #iterativeBuildTree(arr) {
    // iteratively builds the BST

    // find the midpoint of the array;
    let start = 0;
    let end = arr.length - 1;
    let midpoint = Math.floor((end - start) / 2);
    const root = new Node(arr[midpoint]);
    const q = new Queue();
    q.enqueue({
      node: root,
      start: start,
      end: end,
    });

    while (!q.isEmpty()) {
      let curr = q.dequeue();
      let node = curr.node;
      start = curr.start;
      end = curr.end;
      midpoint = Math.floor((end + start) / 2);
      // enqueue left
      if (start < midpoint) {
        // left subtree
        let leftVal = arr[Math.floor((midpoint + start - 1) / 2)];
        node.left = new Node(leftVal);
        q.enqueue({
          node: node.left,
          start: start,
          end: midpoint - 1,
        });
      }

      if (midpoint < end) {
        // right subtree
        let rightVal = arr[Math.floor((end + midpoint + 1) / 2)];
        node.right = new Node(rightVal);
        q.enqueue({
          node: node.right,
          start: midpoint + 1,
          end: end,
        });
      }
    }

    return root;
    // find the left midpoint and the right midpoint next and repeat
  }

  #recursiveBuildTree(arr) {
    // recursively builds the BST
    // get midpoint
    let start = 0;
    let end = arr.length - 1;
    let midpoint = Math.floor((end + start) / 2);
    const root = new Node(arr[midpoint]);

    root.left = this.#recursiveBuildTreeHelper(arr, start, midpoint - 1);
    root.right = this.#recursiveBuildTreeHelper(arr, midpoint + 1, end);

    return root;
  }

  #recursiveBuildTreeHelper(arr, start, end) {
    if (start > end) return null;

    let midpoint = Math.floor((end + start) / 2);
    const newNode = new Node(arr[midpoint]);
    newNode.left = this.#recursiveBuildTreeHelper(arr, start, midpoint - 1);
    newNode.right = this.#recursiveBuildTreeHelper(arr, midpoint + 1, end);

    return newNode;
  }

  prettyPrint() {
    this.#prettyHelperPrint(this.root);
  }

  #prettyHelperPrint = (node, prefix = '', isLeft = true) => {
    if (node === null || node === undefined) {
      return;
    }

    this.#prettyHelperPrint(
      node.right,
      `${prefix}${isLeft ? '│   ' : '    '}`,
      false,
    );
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    this.#prettyHelperPrint(
      node.left,
      `${prefix}${isLeft ? '    ' : '│   '}`,
      true,
    );
  };
}
