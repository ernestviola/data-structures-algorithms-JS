import BalancedBST from './data-structures/BalancedBST/BalancedBST.js';

const arr = [1, 2, 3, 4, 5, 6];

const bst = new BalancedBST(arr);

bst.deleteItem(1);
bst.deleteItem(2);
bst.prettyPrint();

console.log('Balanced: ', bst.isBalanced());

console.log('Depth: ', bst.depth(6));
