// Partial
// Mark all keys inside the object as optional
type MyPartial<T> = { [P in keyof T]?: T[P] }

type Test = {
  name: string
  value: number
}

const TestObj: MyPartial<Test> = {
  name: 'awesome'
}

// Required
// Mark all keys inside the object as required
type MyRequired<T> = { [P in keyof T]-?: T[P] } // Remove modifier `?` by adding `-` sign. By default (when no provided) it's `+`

type Test2 = {
  name?: string
  value?: number
}

const TestObj2: MyRequired<Test2> = {
  name: 'awesome',
  value: 100,
}

// Record
// Declare object structure by providing types for keys and values
type MyRecord<K extends string | number | symbol, V> = { [P in K]: V }

type Keys = 'orange' | 'banana' | 'apple'

type Value = {
  price: number
  order: number
}

const TestObj3: MyRecord<Keys, Value> = {
  apple: {
    order: 0,
    price: 100,
  },

  banana: {
    order: 1,
    price: 200,
  },

  orange: {
    order: 2,
    price: 300,
  }
}

// Optional Record
// Same as ordinary Record (see above) but mark all object keys as optional
type OptionalRecord<K extends string | number | symbol, V> = { [P in K]?: V | Partial<V> | undefined }

type Values = 'awesome' | 'not so awesome' | Value

const TestObj4: OptionalRecord<Keys, Values> = {
  apple: undefined,
  banana: "awesome",
  orange: 'not so awesome',
}

// Pick
// Creates new object type from existing one <T> with only fields that declared <K>
type MyPick<T, K extends keyof T> = { [P in K]: T[P] }

type Test3<T extends Values> = {
  name: T
  value: number
  details?: Value
}

const TestObj5: MyPick<Required<Test3<'awesome'>>, 'name' | 'details'> = {
  name: 'awesome',

  details: {
    order: 0,
    price: 100,
  }
}

// Omit
// Skip some object <T> keys that provided in <K>
type MyOmit<T, K extends keyof T> = { [P in keyof T as P extends K ? never : P]?: T[P] } // Conditional Types

const TestObj6: MyOmit<Test3<'not so awesome'>, 'value'> = {
  name: 'not so awesome'
}

// Tuple
const tuple: [string, boolean, number, {keyName: string}] = ['asdf', false, 0, {keyName: 'asdf'}]

// Awaited
type MyAwaited<T> = T extends Promise<infer R> ? R : T
let string: MyAwaited<Promise<string>>
let number: MyAwaited<number>

// Parameters
type MyParameters<T> = T extends (...args: infer P) => any ? P : never
let params: MyParameters<(a: string) => void>
const params2: MyParameters<(a: {a: MyAwaited<Promise<{ title: string }>>}) => void> = [{a: {title: 'nice'}}]
let params3: MyParameters<(a: string, b: number) => void>
let params4: MyParameters<Function>
let params5: MyParameters<boolean>

// ReturnType
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never
let retrunType: MyReturnType<() => unknown>
let retrunType2: MyReturnType<() => Function>
let retrunType3: MyReturnType<(a: {a: 'number'}) => boolean>
const retrunType4: MyReturnType<(fn: () => any) => typeof fn> = () => 'awesome'

// Chainable
type Chainable<O = Record<string, unknown>> = {
  set<K extends string, V>(key: K, value: V): Chainable<O & {readonly [P in K]: V}>
  get(): O
}

declare const a: Chainable

const result = a
  .set('title', 'awesome')
  .set('price', 404)
  .set('inStock', true)
  .set('params', {width: '100cm', height: '245cm'})
  .get()

// First
type First<T extends unknown[]> = T extends [] ? never : T[0]
let first: First<[number, string]> // number
let first2: First<[]> // never

// Concat
type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U]