import { time } from "console";

class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;
  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const basisBlock: Block = new Block(1, `asfa`, ``, `hello`, 2021);

let blockChain: [Block] = [basisBlock];

console.log(blockChain);

export {};
