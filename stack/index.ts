class Stack {
    private data: number[]

    constructor() {
        this.data = [];
    }

    empty() {
        return this.data.length === 0;
    }

    top() {
        return this.data[this.data.length - 1];
    }

    push(value: number) {
        this.data.push(value);
    }

    pop() {
        return this.data.pop();
    }
}