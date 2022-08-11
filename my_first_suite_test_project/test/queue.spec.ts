import { expect } from "chai";
import { Queue } from "../src/app";

describe("Queue", () => {
    it('Should be able to initialized without an initializer', () => {
        const s = new Queue<number>();
        expect(s.size()).to.equal(0);
    });
    it('Should be able to initialized with an initializer', () => {
        const s = new Queue<number>([1, 2, 3, 4, 5]);
        expect(s.size()).to.equal(5);
    });
    it('Should be able to add a new element after initialized', () => {
        const s = new Queue<number>([1, 2, 3, 4, 5]);
        s.push(5);
        expect(s.size()).to.equal(6);
        expect(s.pop()).to.equal(1);
    });
    it('Should be able to remove an element after initialized', () => {
        const s = new Queue<number>([1, 2, 3, 4, 5]);
        expect(s.pop()).to.equal(1);
    });
    it('Should check if the queue is empty when there is no data there', () => {
        const s = new Queue<number>([]);
        expect(s.isEmpty()).to.equal(true);
    });
});