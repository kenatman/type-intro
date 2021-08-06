class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const person = new Human(`kong`, 24, `female`);

const sayHello = (hallow: Human): string => {
  return `hello ${hallow.name}, you are ${hallow.age} years old, also you are ${hallow.gender}!!!`;
};

console.log(sayHello(person));

export {};
