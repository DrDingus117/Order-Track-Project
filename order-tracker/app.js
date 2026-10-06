class OrderHistoryStack {
    constructor() {
        this.items = [];
    }
    push(order) {
        this.items.push(order);
    }
     pop() {
         return this.items.pop();
     }
    peek() {
        const index = this.items.length - 1;
        console.log(`index`, index);
        return this.items[index];
    }
}

class OrderQueue {
    
}