class OrderHistoryStack {
    constructor() {
        this.items = [];
    }

    add(order) {
        this.items.push(order);
    }

    delete() {
        return this.items.pop(); // returns undefined when empty
    }

    view() {
        const index = this.items.length - 1;
        console.log(`index`, index);
        return this.items[index];
    }

    size() {
        return this.items.length;
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

class OrderQueue {
    constructor(capacity) {
        //precondition
        if (capacity <= 0 || !Number.isInteger(capacity)) {
            throw new Error("Capacity must be a positive integer.");
        }

        //postcondition
        this.capacity = capacity;
        this.items = new Array(capacity);
        this.head = 0;  // next order to process
        this.tail = 0;  // next open position
        this.count = 0;
    }

    add(order) {
        //Precondition: check if the queue is full
        if (this.isFull()) {
            throw new Error("Queue is full.");
        }

        //Postcondition: order is added to the queue
        this.items[this.tail] = order;
        //Update the tail index and count
        const nextTail = (this.tail + 1) % this.capacity;
        console.log('nextTail', nextTail);
        this.tail = nextTail;
        this.count++;
    }

    remove() {
        //Precondition: if the queue is empty, return undefined
        if (this.isEmpty()) {
            return undefined;
        }

        //Postcondition: order is removed from the queue
        const order = this.items[this.head];
        this.items[this.head] = undefined;
        this.head = (this.head + 1) % this.capacity;
        this.count--;
        return order;
    }

    front() { // view the oldest order without removing it
        return this.isEmpty() ? undefined : this.items[this.head];
    }

    isEmpty() {
        return this.count === 0;
    }

    isFull() {
        return this.count === this.capacity;
    }

    size() {
        return this.count;
    }
}

const orderHistory = new OrderHistoryStack();
console.log(orderHistory, orderHistory.items);
console.log(orderHistory, orderHistory.size());
console.log(orderHistory, orderHistory.isEmpty());
console.log(orderHistory, orderHistory.view());
console.log(orderHistory, orderHistory.delete());

const orderQueue = new OrderQueue(5);
console.log(orderQueue, orderQueue.items);
console.log(orderQueue, orderQueue.size());
console.log(orderQueue, orderQueue.isEmpty());
console.log(orderQueue, orderQueue.isFull());

// ---- Step 1: Sample orders ----
const order1 = { orderNumber: 1001, customer: "Jordan", item: "Keyboard" };
const order2 = { orderNumber: 1002, customer: "Maria", item: "Mouse" };
const order3 = { orderNumber: 1003, customer: "Chen", item: "Monitor" };
const order4 = { orderNumber: 1004, customer: "Priya", item: "Webcam" };
const order5 = { orderNumber: 1005, customer: "Sam", item: "Headset" };

// ---- Step 2: Stack tests ----
const stack = new OrderHistoryStack();

// Starts empty
console.assert(stack.isEmpty() === true, "stack should start empty");

// Add three orders
stack.add(order1);
stack.add(order2);
stack.add(order3);
console.assert(stack.size() === 3, "stack size should be 3 after adding three orders");

// view() returns the most recent order without removing it
console.assert(stack.view() === order3, "view() should return the most recent order");
console.assert(stack.size() === 3, "size() should still be 3 after view()");

// LIFO: last order added should come out first
console.assert(stack.delete() === order3, "first delete() should return order3");
console.assert(stack.delete() === order2, "second delete() should return order2");
console.assert(stack.delete() === order1, "third delete() should return order1");

// After removing everything
console.assert(stack.isEmpty() === true, "stack should be empty after deleting all orders");
console.assert(stack.delete() === undefined, "delete() on an empty stack should return undefined");

