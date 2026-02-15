class Node {
  next = null;
  prev = null;
  data = null;
  constructor(data) {
    this.data = data;
  }
}

export default class Queue {
  head = null;
  tail = null;
  length = 0;

  enqueue(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
    }

    this.head = newNode;
    this.length++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    // tail.prev is null then we're at the head;
    let temp = this.tail;
    if (this.tail.prev === null) {
      // at head
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length--;
    return temp.data;
  }

  reverseOrder() {
    const arr = [];
    let currNode = this.head;
    while (currNode) {
      arr.push(currNode.data);
      currNode = currNode.next;
    }
    return arr;
  }

  inOrder() {
    const arr = [];
    let currNode = this.tail;
    while (currNode) {
      arr.push(currNode.data);
      currNode = currNode.prev;
    }
    return arr;
  }

  isEmpty() {
    return this.length === 0;
  }
}
