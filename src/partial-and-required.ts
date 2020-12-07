export {};

// profileの型を定義
type Profile = {
  name: string;
  age?: number;
  zipCode: number;
};

// オプショナルな型定義
// type Profile2 = {
//   name?: string;
//   age?: number;
// };

sex: string;
type PartialType = Partial<Profile>;
type RequiredType = Required<Profile>;
