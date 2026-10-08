class OrderHistoryStack {
    constructor() {
        this.items = [];
    }
    
    add (order) {
        this.items.push(order);
    }
    
    delete () {
         return this.items.pop();
     }
    
     view () {
        const index = this.items.length - 1;
        console.log(`index`, index);
        return this.items[index];
    }
    
    size () {
       return this.items.length;
   }
    
    isEmpty () {
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
        this.front = 0;
        this.back =  0;
        this.count = 0;
    }

        add(order) {
         //Precondition: check if the queue is full
        if (this.isFull()) {
            throw new Error("Queue is full.");
        }
        
        //Postcondition: order is added to the queue
         this.items[this.back] = order;
         //Update the back index and count
         const newIndex = (this.back + 1) % this.capacity;
         console.log('nextBack', newBack);
         this.back = nextBack;
         this.count++;
        }
     

        remove() {
           //Precondition: check if the queue is empty
           if (this.isEmpty()) {
               throw new Error("Queue is empty.");
           }
           
           //Postcondition: order is removed from the queue
           const order = this.items[this.front];
           this.items[this.front] = null; // Clear the reference to help with garbage collection
           this.front = (this.front + 1) % this.capacity;
           const NextFront = (this.front + 1) % this.capacity;
           this.front = NextFront;
           this.count--;
           return order;
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

