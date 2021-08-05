interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = { name: "YS", age: 32, gender: "male" };

const sayHello = (hallow: Human): string => {
  return `hello ${hallow.name}, you are ${hallow.age} years old, also you are ${hallow.gender}!!!`;
};

console.log(sayHello(person));

export {};
