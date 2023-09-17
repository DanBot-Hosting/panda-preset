export interface Recursive<T> {
  [key: string]: Recursive<T> | T;
}

export interface Option {
  label: string;
  value: string;
}
