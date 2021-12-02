export class Stack<Type> {
   collection: Type[];

   constructor() {
      this.collection = [];
   }

   print() {
      console.log(this.collection);
   }

   push(val: Type) {
      return this.collection.push(val);
   }

   pop() {
      return this.collection.pop();
   }

   peek() {
      return this.collection[this.collection.length - 1];
   }

   size() {
      return this.collection.length;
   }

   isEmpty() {
      return this.collection.length === 0;
   }

   clear() {
      this.collection = [];
   }
}

//////////////////////////////////

export class Queue<Type> {
   collection: Type[];

   constructor() {
      this.collection = [];
   }
   print() {
      console.log(this.collection);
   }

   enqueue(val: Type) {
      return this.collection.push(val);
   }

   dequeue() {
      return this.collection.shift();
   }

   front() {
      return this.collection[0];
   }

   size() {
      return this.collection.length;
   }

   isEmpty() {
      return this.collection.length === 0;
   }

   clear() {
      this.collection = [];
   }
}

///////////////////////////////

export class PriorityQueue<Type> {
   collection: Array<[Type, number]>;

   constructor() {
      this.collection = [];
   }

   print() {
      console.log(this.collection);
   }

   enqueue(arr: [Type, number]) {
      const [, priority] = arr;
      this.collection = this.collection.reverse();
      let index = this.collection.findIndex(([, currPriority]) => priority >= currPriority);
      index === -1 ? this.collection.push(arr) : this.collection.splice(index, 0, arr);
      this.collection = this.collection.reverse();
   }

   dequeue() {
      return this.collection.shift();
   }

   front() {
      return this.collection.at(0);
   }

   size() {
      return this.collection.length;
   }

   isEmpty() {
      return this.collection.length === 0;
   }

   clear() {
      this.collection = [];
   }
}

/////////////////////////////////////

export class ListNode<Type> {
   element: Type;
   next?: ListNode<Type>;

   constructor(element: Type) {
      this.element = element;
      this.next = undefined;
   }
}

export class LinkedList<Type> {
   length: number;
   head?: ListNode<Type>;

   constructor() {
      this.length = 0;
      this.head = undefined;
   }
   print() {
      console.log(JSON.stringify(this.head));
   }
   size() {
      return this.length;
   }
   add(element: Type) {
      const node = new ListNode(element);
      if (this.head) {
         let currNode = this.head;
         while (currNode.next) {
            currNode = currNode.next;
         }
         currNode.next = node;
      } else {
         this.head = node;
      }
      this.length++;
   }
   remove(element: Type): number | void {
      if (this.head?.element === element) {
         this.head = this.head?.next;
         return this.length--;
      }

      let prevNode = this.head;
      while (prevNode) {
         let currNode = prevNode.next;
         if (currNode?.element === element) {
            prevNode.next = currNode?.next;
            return this.length--;
         }

         prevNode = currNode;
      }
   }
   isEmpty() {
      return this.length === 0;
   }
   indexOf(element: Type) {
      let index = 0;
      let currNode = this.head;
      while (currNode) {
         if (currNode.element === element) {
            return index;
         }
         index++;
         currNode = currNode.next;
      }
      return -1;
   }
   elementAt(index: number) {
      let currNode = this.head;
      for (let i = 0; i < index; i++) {
         if (!currNode?.next) {
            return null;
         }
         currNode = currNode.next;
      }
      return currNode?.element;
   }
   removeAt(index: number) {
      let prevNode = this.head;

      if (index === 0) {
         this.length--;
         this.head = prevNode?.next;
         return prevNode?.element;
      }

      for (let i = 1; i <= index; i++) {
         let currNode: ListNode<Type> | undefined = prevNode?.next;
         if (currNode) {
            if (i === index) {
               this.length--;
               if (prevNode) {
                  prevNode.next = currNode.next;
               }
               return currNode.element;
            }
         }
         prevNode = currNode;
      }

      return null;
   }
   addAt(index: number, element: Type): void {
      const node = new ListNode(element);
      let currNode = this.head;

      if (index === 0) {
         this.length++;
         node.next = this.head;
         this.head = node;
         return;
      }

      for (let i = 1; i <= this.length; i++) {
         if (i === index && currNode) {
            this.length++;
            node.next = currNode.next;
            currNode.next = node;
            return;
         }
         currNode = currNode?.next;
      }
      return;
   }
}

/////////////////////////////////////////////////

export class MapDS<Type> {
   collection: { [key: string]: Type };

   constructor() {
      this.collection = {};
   }
   print() {
      console.log(this.collection);
   }
   has(key: string) {
      return this.collection[key] ? true : false;
   }
   add(key: string, value: Type) {
      return (this.collection[key] = value);
   }
   remove(key: string) {
      if (this.has(key)) {
         delete this.collection[key];
      }
   }
   get(key: string) {
      return this.collection[key];
   }
   size() {
      return Object.keys(this.collection).length;
   }
   values() {
      return Object.values(this.collection);
   }
   keys() {
      return Object.keys(this.collection);
   }
   clear() {
      this.collection = {};
   }
}

////////////////////////////////////////////////////////

type Key = string | symbol | number;

export class SetDS {
   dictionary: { [key: Key]: boolean };
   length: number;

   constructor() {
      this.dictionary = {};
      this.length = 0;
   }

   has(element: Key) {
      return this.dictionary[element] !== undefined;
   }

   values() {
      return Object.keys(this.dictionary);
   }

   add(element: Key) {
      if (!this.has(element)) {
         this.dictionary[element] = true;
         this.length++;
         return true;
      }

      return false;
   }

   remove(element: Key) {
      if (this.has(element)) {
         delete this.dictionary[element];
         this.length--;
         return true;
      }

      return false;
   }

   size() {
      return this.length;
   }

   union(set: SetDS) {
      const newSet = new SetDS();
      this.values().forEach(value => {
         newSet.add(value);
      });
      set.values().forEach(value => {
         newSet.add(value);
      });

      return newSet;
   }

   intersection(set: SetDS) {
      const newSet = new SetDS();

      let largeSet: SetDS;
      let smallSet: SetDS;
      if (this.length > set.length) {
         largeSet = this;
         smallSet = set;
      } else {
         largeSet = set;
         smallSet = this;
      }

      smallSet.values().forEach(value => {
         if (largeSet.dictionary[value]) {
            newSet.add(value);
         }
      });

      return newSet;
   }
   difference(set: SetDS) {
      const newSet = new SetDS();

      this.values().forEach(value => {
         if (!set.dictionary[value]) {
            newSet.add(value);
         }
      });

      return newSet;
   }
}
