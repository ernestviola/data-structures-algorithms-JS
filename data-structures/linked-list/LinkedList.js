/*
RANDOM NOTE

factory functions get assigned an object so then the object becomes
for example
const person = *some person factory function*()

that factory function returns an object and each of its properties get assigned to person

so if factory function returned
{
name: 'Bob',
age: '222
}

name becomes a property of person.

On the other hand with a constructor

function Person() {
  this.name = 'Bob'
  this.age = '22'
}

you say the keyword 'new' in order to create the object and this then refers to
the variable you assigned it.


*/

class Node {
  next = null;
  value = null;
}

class LinkedList {
  // you dont need to say this.head in the class
  // because it was removed due to the class keyword denoting it's a class / constructor
  head = null;

  append(value) {}
  prepend(value) {}
  size() {}
  head() {}
  tail() {}
  at(index) {}
  pop() {}
  contains(value) {}
  findIndex(value) {}
  toString(value) {}
  insertAt(index, ...values) {}
  removeAt(index) {}
}

export default LinkedList;
