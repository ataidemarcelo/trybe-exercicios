// Otávio Miranda -> TypeScript Generic Types - Introdução aos tipos genéricos
// https://www.youtube.com/watch?v=eXVlK2PzE1ks

type callbackFilter<U> = (value: U, index?: number, array?: Array<U>) => boolean;

function myFilter<T>(array: Array<T>, callback: callbackFilter<T>): Array<T> {
  const newArray: Array<T> = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

console.log(myFilter([1, 2, 3], (item) => item < 3 ));

console.log(myFilter(["a", "b", "c"], (item) => item !== "a" ));