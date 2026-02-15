import BalancedBST from './data-structures/BalancedBST/BalancedBST.js';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const bst = new BalancedBST(arr);

bst.levelOrderForEach((val) => {
  console.log(val);
});

bst.prettyPrint();
