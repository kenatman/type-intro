const name = `YS`,
  age = 32,
  gender = `male`;

const sayHello = (name, age, gender?) => {
  console.log(
    `hello ${name}, you are ${age} years old, also you are ${gender}`
  );
};

sayHello(name, age);

export {};
