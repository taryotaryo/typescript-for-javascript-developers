export {};

type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

const example1 = {
  name: 'taryo',
  age: 29,
};

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: 'taryo',
  age: 29,
};

type Profile2 = typeof example1;
