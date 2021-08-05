const sayHello = (name: string, age: number, gender: string): string => {
  return `hello ${name}, you are ${age} years old, also you are ${gender}`;
};

console.log(sayHello(`YS`, 32, `male`));

export {};
