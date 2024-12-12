class Storage {
    constructor(items) {
        this.items = items;
    }

    getItems() {
        return this.items;
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(item) {
        const index = this.items.indexOf(item);
        if (index >= 0) {
            this.items.splice(index, 1);
        }
    }
}

const arr = ["apple", "banana", "mango"];
const storage = new Storage(arr);

console.log(`Initial array: ${storage.getItems().join(" ")}`); 

storage.addItem("orange");
console.log(`Added orange: ${storage.getItems().join(" ")}`); 

storage.removeItem("banana");
console.log(`Removed banana: ${storage.getItems().join(" ")}`); 