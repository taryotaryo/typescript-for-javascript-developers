export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'ryota',
  age: 29,
};

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: 'ham',
  age: 43,
};

type YomitoriSenyo<T> = { readonly [P in keyof T]: T[P] };
type YomitoriSenyoProfile = YomitoriSenyo<Profile>;
