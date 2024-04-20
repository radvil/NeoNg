# @neo/utils

## ITERABLE (it)

This utilities used for iterable operation to achieve the lazy output

### range

Generate a range of numbers as stream `A`

```typescript
const stream = it.pipe(it.range(0, 3));
stream(); // 0, 1, 2, 3
```

### filter

Filter stream of `A` to output only those that matches specific condition

```typescript
const lessThan1000 = it.pipe(it.filter((x) => x < 5));
lessThan1000(it.range(0, 1_000_000)); // 0, 1, 2, 3, 4, 5
```

### map

Transform stream of `A` to stream of `B`

```typescript
const twice = it.pipe(it.map((x) => x * 2));
twice(it.range(0, 5)); // 0, 2, 4, 6, 8, 10
```

### reduce

Reduces a stream of `A` values into a single value

```typescript
const calcTotal = it.pipe(it.reduce((a, b) => a + b));
calcTotal(it.range(0, 5)); // 10
```

### toArray

Combine all values from stream `A` onto an array of iterable `A`

```typescript
const asArray = it.pipe(
  it.map((x) => ({ x })),
  it.toArray(),
);
asArray(it.range(0, 3)); // [{ x: 0 }, { x: 1 }, { x: 2 }, { x: 3 }]
```

### prime

Create a stream of prime numbers based on range given

```typescript
const primeNumbers = it.pipe(it.primesInRange(1, 10));
primeNumbers(); // 1, 3, 5, 7
```

## VALUE (v)

Reusable utilities functions to operate on some values

### string/capitalize

Capitalize the first letter

```typescript
v.capitalize("lion"); // Lion
```

### string/hasUnicode

Check if given string values has some unicode chars

```typescript
v.hasUnicode("Im on 🔥"); // true
```

### string/unicodeSize

Count unicode size of a string value;

```typescript
v.unicodeSize("some🎲"); // 5
```

### string/isString

Check if given value is a string

```typescript
v.isString("Injoker"); // true
```

### string/repeat

Repeat a given value `n` times

```typescript
v.repeat("🔥", 4); // 🔥🔥🔥🔥
```

This function also accept a third argument as the separator

```typescript
v.repeat("🔥", 4, "|"); // 🔥|🔥|🔥|🔥
```

### string/stringSize

Count the size/length of the given string

```typescript
v.stringSize("Name"); // 4
```

### string/titlecase

Titlecase the given string

```typescript
v.titlecase("I am the injoker"); // I Am The Injoker
```

### number/countInRange

Generate an array of specified numbers in range

```typescript
v.countInRange(1, 3); // [1, 2, 3]
```

This function accept the third argument which a step of range

```typescript
v.countInRange(1, 10, 2); // [2, 4, 6, 8, 10]
```

### number/generatePrimes

Generate prime numbers of given range as an array

```typescript
v.generatePrimes(0, 10); // [1, 3, 5, 7]
```

### number/isEven

Check if given value is an even number.
This custom function uses bitwise operator which proven to be faster then `x % 2 === 0` way

```typescript
v.isEven(10); // true
```

### number/isOdd

Check if given value is an odd number.
This custom function uses bitwise operator which proven to be faster then `x % 2 === 1` way

```typescript
v.isOdd(9); // true
```

### number/isLength

Check if given value is a length

```typescript
isLength(9); // true
isLength(Number.MIN_VALUE); // false
isLength(Infinity); // false
isLength("3"); // false
```

### number/isPowerOf2

Check if given number is the power of 2. This function also utilizes the bitwise operator

```typescript
v.isPowerOf2(8); // true
```

### number/isPrime

Check if given `n` is a prime number

```typescript
v.isPrime(7); // true
```

### number/generateRandomNumbers

Generate an array of random integers based of the given range

```typescript
v.generateRandomNumbers(5, 10); // [6,8,10,8,9,10]
```

### string/restrictInRange

Return the clamped value within the specified range,
ensuring that it is greater than or equal to the minimum value
and less than or equal to the maximum value.

```typescript
v.restrictInRange(5, 0, 20); // 5
```

### object/ensureAsFunc

Ensure the given value is a function, if it isn't, then wrap it in a function

```typescript
v.ensureAsFunc(() => 18); // () => 18
v.ensureAsFunc("injoker"); // () => "injoker"
```

### collection/getIterator

Return the iterator function of given value. Will throw if value is not an iterable

```typescript
v.getIterator(["a", "b"]); // Array Iterator {...}
v.getIterator(8); // throw error "Invalid iterable type. Must be Iterable or AsyncIterable."
```

### collection/isArrayLike

Check if given value is an arraylike value

```typescript
isArrayLike([1, 2, 3]); // true
isArrayLike(document.body.children); // true
isArrayLike(Function); // false
isArrayLike("abc"); // true
```

### collection/isIterable

Check if given value has `Symbol.iterator` as it's prop

```typescript
v.isIterable([]); // true
```

### collection/isAsyncIterable

Check if given value has `Symbol.asyncIterator` as it's prop

```typescript
v.isAsyncIterable([]); // false
```

### collection/size

Return the size of an arraylike or iterable value

```typescript
size([1, 2, 3]); // 3
size({ a: 1, b: 2 }); // 2
size("neo"); // 3
```

### misc/swap2Variables

Swap the given [a,b] variables as [a,b] with the swapped value

```typescript
let a = { name: "A" };
let b = { name: "B" };
v.swap2Variables(a, b); // a = { name: "B" }, b = { name: "A" }
```
