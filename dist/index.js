"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
const basisBlock = new Block(1, `asfa`, ``, `hello`, 2021);
let blockChain = [basisBlock];
console.log(blockChain);
//# sourceMappingURL=index.js.map