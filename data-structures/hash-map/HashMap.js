import { hash } from '../../algorithms/hash/hash.js';

class Node {
  next = null;
  key = null;
  value = null;
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class LinkedList {
  head = null;
  tail = null;

  append(key, value) {
    const newNode = new Node(key, value);
    if (this.head === null) {
      // empty list
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  remove(key) {
    // looks for an element and returns it
    let prev = null;
    let curr = this.head;

    while (curr && curr.key !== key) {
      prev = curr;
      curr = curr.next;
    }

    if (curr) {
      if (!prev) {
        this.head = curr.next;
      } else {
        prev.next = curr.next;
      }

      return curr;
    } else {
      return null;
    }
  }

  get(key) {
    let curr = this.head;
    while (curr && curr.key !== key) {
      curr = curr.next;
    }

    if (curr) {
      return curr;
    } else {
      return null;
    }
  }
}

export default class HashMap {
  #loadFactor = 0.75;
  #capacity = 16;
  #length = 0;
  #buckets = null;

  constructor(capacity = 16) {
    this.#capacity = capacity;
    this.#buckets = new Array(this.#capacity);
  }

  set(key, value) {
    // check if above capacity
    if (this.#length > this.#capacity * this.#loadFactor) {
      // if above capacity then double capacity and create a new HashMap with
      // those values by setting them
      const tempArr = this.entries();
      this.#capacity = this.#capacity * 2;
      this.#buckets = new Array(this.#capacity);
      this.#length = 0;

      tempArr.forEach((arr) => {
        this.set(arr[0], arr[1]);
      });
    }

    const bucketIndex = this.#getIndex(key);

    if (this.#buckets[bucketIndex]) {
      // go to end of linkedlist and append the {key,value}
      // first need to get
      const list = this.#buckets[bucketIndex];
      const potentialNodeWithKey = list.get(key);
      if (potentialNodeWithKey) {
        // replace
        potentialNodeWithKey.value = value;
      } else {
        list.append(key, value);
        this.#length++;
      }
    } else {
      const list = new LinkedList();
      list.append(key, value);
      this.#buckets[bucketIndex] = list;
      this.#length++;
    }
  }

  get(key) {
    const bucketIndex = this.#getIndex(key);
    if (this.#buckets[bucketIndex]) {
      const list = this.#buckets[bucketIndex];
      const node = list.get(key); //returns the node

      if (node) {
        return node.value;
      } else {
        return null;
      }
    }
  }

  has(key) {
    const bucketIndex = this.#getIndex(key);
    if (this.#buckets[bucketIndex]) {
      const list = this.#buckets[bucketIndex];
      const node = list.get(key); //returns the node

      if (node) {
        return true;
      } else {
        return false;
      }
    }
  }

  remove(key) {
    // get the list
    const bucketIndex = this.#getIndex(key);
    if (this.#buckets[bucketIndex]) {
      const list = this.#buckets[bucketIndex];
      if (list.remove(key)) {
        this.length--;
        return true;
      }
    }

    return false;
  }

  length() {
    return this.#length;
  }

  clear() {
    this.#capacity = 16;
    this.#length = 0;
    this.#buckets = new Array(this.#capacity);
  }

  keys() {
    const tempArr = [];
    for (let list of this.#buckets) {
      if (list) {
        // walk the list and add each key to tempArr
        let curr = list.head;

        while (curr) {
          tempArr.push(curr.key);
          curr = curr.next;
        }
      }
    }

    return tempArr;
  }
  values() {
    const tempArr = [];
    for (let list of this.#buckets) {
      if (list) {
        // walk the list and add each key to tempArr
        let curr = list.head;

        while (curr) {
          tempArr.push(curr.value);
          curr = curr.next;
        }
      }
    }

    return tempArr;
  }

  entries() {
    const tempArr = [];
    for (let list of this.#buckets) {
      if (list) {
        // walk the list and add each key to tempArr
        let curr = list.head;

        while (curr) {
          tempArr.push([curr.key, curr.value]);
          curr = curr.next;
        }
      }
    }

    return tempArr;
  }

  #getIndex(key) {
    return hash(key, this.#capacity);
  }
}
