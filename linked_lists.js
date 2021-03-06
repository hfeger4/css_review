// Functions of a linked list:
// insert 0(1), 0(n) if you want to insert into some place.
// remove 0(n)
// find
// head 0(1)



class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(arr = []) {
        arr = arr.slice();

        let prevNode = new Node(arr.pop(), null);
        while(arr.length > 0) {
            prevNode = new Node(arr.pop(), prevNode);
        }
        this.head = prevNode;
    }

    find(value) {}

    remove(value) {}

    insert(value) {}

    findKth(k) {}

    toString() {
        let string = '';
        let currentNode = this.head;
        let counter = 0;
        while (currentNode && counter < 30) {
            string += currentNode.value + ' -> ';
            currentNode = currentNode.next;
            counter++;
        }
        return string + (counter < 30 ? 'null' : '...');
    }
}

// Double elements and append zeros in linked list
// Given a linked list with some two adjacent repeating nodes before a zero, task is to double the first and make next 0. After this, append all the zeros to tail.
// Input : 4 -> 4 -> 0 -> 2 -> 3 -> 4 ->
//         3 -> 3 -> 0 -> 4 ->
// Output : 8-> 2-> 3-> 4-> 6-> 4-> 0->
//          0-> 0-> 0->

function doubleAndAppend(linkedList) {
    let zeroCount = 0;
    let beforePrevious = null,
        previous = null,
        currentNode = linkedList.head;

    let increment = () => {
        beforePrevious = previous;
        previous = currentNode;
        currentNode = currentNode.next;
        return currentNode;
    };

    while(currentNode) {
        if (currentNode.value === 0
            && previous && beforePrevious
            && previous.value === beforePrevious.value) {

            beforePrevious.value *= 2;
            // remove zero node that will be created
            previous.value = 0; // cn.n could be null

        }
        increment();
    }

    // remove leading zeros
    while(linkedList.head.value === 0) {
        if (linkedList.head.next) {
            linkedList.head = linkedList.head.next;
            zeroCount++;
        } else {
            break;
        }
    }

    currentNode = linkedList.head;
    beforePrevious = previous = null;


    while(currentNode) {
        if (currentNode.value === 0 && currentNode.next) {
            previous.next = currentNode.next;
            currentNode = currentNode.next;
            zeroCount++;
        } else {
            increment();
        }
    }
    // currentNode = nill, previous = tail node
    let tail = previous;


    let zeroListHead = null;
    for (var i = 0; i < zeroCount; i++) {
        zeroListHead = new Node(0, zeroListHead);
    }

    tail.next = zeroListHead;

    return linkedList;
}

function reverse_linked_list(linkedlist){
  let current = linkedlist.head;
  let prev = null;
  let nextNode = null;

  while(current){
    nextNode = current.next;
    current.next = prev;

    prev = current;
    current = nextNode;
  }
  return prev;
}
