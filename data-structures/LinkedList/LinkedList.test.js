import LinkedList from './LinkedList.js';

const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);

console.log(list.toString());

list.prepend(0);

console.log(list.toString());

console.log('List size: ', list.size);

console.log('Index at:', list.at(2));

console.log(list.pop());
console.log(list.toString());

console.log('Contains 2: ', list.contains(2));
console.log('Contains 99: ', list.contains(99));

console.log('Index of 2: ', list.findIndex(2));
console.log('Index of 99: ', list.findIndex(99));

list.prepend(0);
list.removeAt(4);

console.log(list.toString());
