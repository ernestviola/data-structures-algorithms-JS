import BalancedBST from './data-structures/BalancedBST/BalancedBST.js';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const bst = new BalancedBST(arr);

bst.levelOrderForEach((val) => {
  console.log(val);
});

bst.deleteItem(2);
bst.deleteItem(3);
bst.deleteItem(1);

bst.prettyPrint();
