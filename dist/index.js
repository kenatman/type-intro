"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
Block.calculateHash = (index, previousHash, timestamp, data) => {
    return CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
};
const basisBlock = new Block(1, `asfa`, ``, `hello`, 2021);
let blockChain = [basisBlock];
const a = Block.calculateHash(1, `sdfa`, 123, `afasdfas`);
console.log(a);
//# sourceMappingURL=index.js.map