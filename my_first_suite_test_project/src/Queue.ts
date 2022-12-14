export class Queue<T> {
    private _store: T[] = [];

    constructor(initialData: Array<T> = []) {
        this._store.push(...initialData)
    }

    push(val: T) {
        this._store.push(val);
    }

    pop(): T | undefined {
        return this._store.shift();
    }

    isEmpty(): boolean {
        // return this._store.length === 0;
        // return this.size() === 0;
        return true;
    }

    size(): number {
        return this._store.length;
    }
}