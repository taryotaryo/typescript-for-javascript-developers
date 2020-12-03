export {};

// const echo = (arg: number): number => {
//   return arg;
// };

// const echo = (arg: strign): string => {
//   return arg;
// };

const echo = <T>(arg: T): T => {
  return arg;
};

console.log(echo<number>(100));
console.log(echo<string>('hello'));
console.log(echo<boolean>(true));

class Mirror<T> {
  constructor(public value: T) {}
  echo(): T {
    return this.value;
  }
}

console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>('hello, generics!').echo());
console.log(new Mirror<boolean>(true).echo());
