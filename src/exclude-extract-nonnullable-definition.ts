export {};

// Exclude
type MyExclude<T> = DebugType;
type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;
type MyfunctionType = MyExclude;

// Extract
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;

// NunNullable

type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
