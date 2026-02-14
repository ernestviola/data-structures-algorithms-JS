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
  tail = null;
  size = 0;

  append(value) {
    const newNode = new Node();
    newNode.value = value;

    if (this.tail) {
      this.tail.next = newNode;
    }
    if (this.head === null) {
      this.head = newNode;
    }
    this.tail = newNode;
    this.size++;
  }
  prepend(value) {
    const newNode = new Node();
    newNode.value = value;

    if (this.head) {
      newNode.next = this.head;
    }
    if (this.tail === null) {
      this.tail = newNode;
    }

    this.head = newNode;
    this.size++;
  }
  size() {
    return this.size;
  }
  head() {
    if (this.head) {
      return this.head.value;
    } else {
      return undefined;
    }
  }
  tail() {
    if (this.tail) {
      return this.tail.value;
    } else {
      return undefined;
    }
  }

  at(index) {
    let current = this.head;

    while (current && index > 0) {
      current = current.next;
      index--;
    }

    if (current) {
      return current.value;
    } else {
      return undefined;
    }
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    let temp = this.head.value;
    this.head = this.head.next;

    return temp;
  }
  contains(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }

    return false;
  }
  findIndex(value) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.next;
      index++;
    }

    return -1;
  }

  toString() {
    let stringToPrint = '';
    let current = this.head;
    while (current) {
      stringToPrint += String(current.value);
      current = current.next;
      if (current) {
        stringToPrint += ', ';
      }
    }
    return stringToPrint;
  }

  insertAt(index, ...values) {
    // maybe do a check at the size first?
    if (index >= this.size || index < 0) {
      throw new Error(
        `Range Error: index of ${index} is out of range ${this.size - 1}`,
      );
    }
    let previous = null;
    let current = this.head;

    while (current && index > 0) {
      previous = current;
      current = current.next;
      index--;
    }

    values.forEach((value) => {
      const newNode = new Node();
      newNode.value = value;

      if (previous === null) {
        //then we are at the head
        this.head = newNode;
      } else {
        previous.next = newNode;
      }

      previous = newNode;
    });

    previous.next = current;
  }

  removeAt(index) {
    if (index >= this.size || index < 0) {
      throw new Error(
        `Range Error: index of ${index} is out of range ${this.size - 1}`,
      );
    }
    if (index === 0) {
      this.pop();
      return;
    }

    let previous = null;
    let current = this.head;
    // what about remove at index 0 and remove at index this.size - 1?

    while (current && index > 0) {
      previous = current;
      current = current.next;
      index--;
    }

    if (current === this.tail) {
      this.tail = previous;
    }

    previous.next = current.next;
  }
}

export default LinkedList;
